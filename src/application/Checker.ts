import Client from "../domain/Entities/Client";

export default interface Checker {
  verifyCustomer(params: any): Promise<Client | boolean>;
}
