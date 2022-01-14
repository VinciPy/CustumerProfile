import InteractionAdapter from "../../adapters/InteractionAdapter";
import PurchaseAdapter from "../../adapters/PurchaseAdapter";
import VisitAdapter from "../../adapters/VisitAdapter";
import Connection from "../../infra/database/Connection";
import MongoDB from "../../infra/database/MongoDB";
import ClientRepositoryMongo from "../../infra/repository/mongodb/ClientRepositoryMongo";
import Checker from "../Checker";
import CheckerInteraction from "../CheckerInteraction";
import CheckerVisit from "../CheckerVisit";
export default class CustomerInteraction {
  private interaction;
  private checker: Checker;
  private db: MongoDB;

  constructor(message: any, db: MongoDB) {
    this.db = db;
    switch (message.tipo) {
      case "interaction":
        this.interaction = new InteractionAdapter(message);
        this.checker = new CheckerInteraction();
        break;
      case "visit":
        this.interaction = new VisitAdapter(message);
        this.checker = new CheckerVisit(interaction);
        break;
      case "purchase":
        this.interaction = new PurchaseAdapter(message);
        this.checker = new CheckerPurchase(interaction);
        break;
    }
  }

  async run() {
    let clientRepository = new ClientRepositoryMongo(this.db);
    let clientExist = await this.checker.verifyCustomer();
    if (typeof clientExist == "undefined") {
      clientRepository.findAndUpdate(clientExist, this.interaction);
    } else {
      clientRepository.add(this.interaction);
    }
  }
}
