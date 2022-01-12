import Client from "../domain/Entities/Client";
import Visit from "../domain/Entities/Visit";
import ClientRepository from "../domain/Repository/ClientRepository";
import Checker from "./Checker";

export default class CheckerVisit implements Checker {
  Visit: Visit;
  ClientRepository: ClientRepository;
  Client: Client;

  constructor(Visit: Visit, ClientRepository: ClientRepository) {
    this.Visit = Visit;
    this.ClientRepository = ClientRepository;
  }

  async verifyCustomer(): Promise<boolean | Client> {
    let ipExist = await this.ipExist();
    let SocialAccount = await this.SocialAccountExist();
    if (SocialAccount && ipExist) {
      return SocialAccount;
    }
  }

  async ipExist() {
    let client = await this.ClientRepository.findByIpAddress(
      this.Visit.getIpAddress()
    );
    if (!client) return false;
    return client;
  }

  async SocialAccountExist() {
    let client = await this.ClientRepository.findBySocialAccount(
      this.Visit.getSocialAccount()
    );
    if (!client) return false;
    return client;
  }
}
