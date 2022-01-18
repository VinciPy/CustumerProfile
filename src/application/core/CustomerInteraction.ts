import AdapterJson from "../../adapters/AdapterJson";
import InteractionAdapter from "../../adapters/InteractionAdapter";
import PurchaseAdapter from "../../adapters/PurchaseAdapter";
import VisitAdapter from "../../adapters/VisitAdapter";
import ClientRepository from "../../domain/Repository/ClientRepository";
import Connection from "../../infra/database/Connection";
import MongoDB from "../../infra/database/MongoDB";
import ClientRepositoryMongo from "../../infra/repository/mongodb/ClientRepositoryMongo";
import Checker from "../Checker";
import CheckerInteraction from "../CheckerInteraction";
import CheckerPurchase from "../CheckerPurchase";
import CheckerVisit from "../CheckerVisit";
export default class CustomerInteraction {
  private interaction: any;
  private db: ClientRepository;
  private message: any;

  constructor(message: any, db: ClientRepository) {
    this.db = db;
    this.message = message;
  }

  async run() {
    let checker: Checker;
    switch (this.message.Type) {
      case "interaction":
        this.interaction = new InteractionAdapter(this.message);
        checker = new CheckerInteraction();
        break;
      case "visit":
        this.interaction = new VisitAdapter(this.message);
        checker = new CheckerVisit(this.interaction.adapt(), this.db);
        break;
      case "purchase":
        this.interaction = new PurchaseAdapter();
        checker = new CheckerPurchase();
        break;
      default:
        throw new Error("Unknown interaction");
    }
    let clientExist = await checker.verifyCustomer();
    this.interaction = AdapterJson(this.interaction);
    if (clientExist == undefined) {
      this.db.add(this.interaction);
    } else {
      this.db.findAndUpdate(clientExist, this.interaction);
    }
  }
}
