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
  private checker: Checker;
  private db: MongoDB;
  private clientRepository: ClientRepository;

  constructor(message: any, db: MongoDB) {
    this.db = db;
    this.clientRepository = new ClientRepositoryMongo(this.db);
    switch (message.tipo) {
      case "interaction":
        this.interaction = new InteractionAdapter(message);
        this.checker = new CheckerInteraction();
        break;
      case "visit":
        this.interaction = new VisitAdapter();
        this.checker = new CheckerVisit(
          this.interaction,
          this.clientRepository
        );
        break;
      case "purchase":
        this.interaction = new PurchaseAdapter();
        this.checker = new CheckerPurchase();
        break;

      default:
        throw new Error("Unknown interaction");
    }
  }

  async run() {
    let clientExist = await this.checker.verifyCustomer();
    if (typeof clientExist != "undefined") {
      this.clientRepository.findAndUpdate(clientExist, this.interaction);
    } else {
      this.clientRepository.add(this.interaction);
    }
  }
}
