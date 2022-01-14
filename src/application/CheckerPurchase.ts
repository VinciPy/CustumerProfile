import Client from "../domain/Entities/Client";
import Checker from "./Checker";

export default class CheckerPurchase implements Checker {
  verifyCustomer(params: any): Promise<boolean | Client> {
    throw new Error("Method not implemented.");
  }
}
