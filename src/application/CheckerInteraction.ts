import Client from "../domain/Entities/Client";
import Checker from "./Checker";

export default class CheckerInteraction implements Checker {
  verifyCustomer(): Promise<Client | undefined> {
    throw new Error("Method not implemented.");
  }
}
