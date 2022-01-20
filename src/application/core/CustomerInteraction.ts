import AdapterJson from "../../adapters/AdapterJson";
import InteractionAdapter from "../../adapters/InteractionAdapter";
import PurchaseAdapter from "../../adapters/PurchaseAdapter";
import VisitAdapter from "../../adapters/VisitAdapter";
import ClientRepository from "../../domain/Repository/ClientRepository";
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
        checker = new CheckerInteraction(this.interaction.adapt(), this.db);
        break;
      case "visit":
        this.interaction = new VisitAdapter(this.message);
        checker = new CheckerVisit(this.interaction.adapt(), this.db);
        break;
      case "purchase":
        this.interaction = new PurchaseAdapter(this.message);
        console.log(this.interaction.adapt());
        checker = new CheckerPurchase(this.interaction.adapt(), this.db);
        break;
      default:
        throw new Error("Unknown interaction");
    }
    let clientExist = await checker.verifyCustomer();
    console.log(clientExist);
    if (clientExist == undefined) {
      let client_json = AdapterJson(this.interaction.adapt());
      this.db.add(client_json);
    } else {
      this.db.findAndUpdate(clientExist, AdapterJson(this.interaction.adapt()));
    }
  }
}
