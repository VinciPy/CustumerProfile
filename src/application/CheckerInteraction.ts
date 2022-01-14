import Client from "../domain/Entities/Client";
import Checker from "./Checker";

export default class CheckerInteraction implements Checker {
  verifyCustomer(params: any): Promise<boolean | Client> {
    throw new Error("Method not implemented.");
  }
}
