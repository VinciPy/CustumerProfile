import Client from "../domain/Entities/Client";

export default interface Checker {
  verifyCustomer(): Promise<Client | undefined>;
}
