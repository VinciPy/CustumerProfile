import Client from "../domain/Entities/Client";
import Purchase from "../domain/Entities/Purchase";
import ClientRepository from "../domain/Repository/ClientRepository";
import Checker from "./Checker";

export default class CheckerPurchase implements Checker {
  Purchase: Purchase;
  ClientRepository: ClientRepository;
  constructor(Purchase: Purchase, ClientRepository: ClientRepository) {
    this.Purchase = Purchase;
    this.ClientRepository = ClientRepository;
  }
  async verifyCustomer(): Promise<Client | undefined> {
    let ipExist = await this.ipExist();
    let SocialAccount = await this.SocialAccountExist();
    let Device = await this.DeviceExist();
    let cpf = await this.CpfExist();
    if (SocialAccount && ipExist) {
      return SocialAccount;
    }
    if (ipExist && Device) {
      return Device;
    }
    if (SocialAccount && Device) {
      return Device;
    }
    return undefined;
  }

  async ipExist() {
    let client = await this.ClientRepository.findByIpAddress(
      this.Purchase.getIpAddress()
    );
    if (!client) return false;
    return client;
  }

  async SocialAccountExist() {
    let client = await this.ClientRepository.findBySocialAccount(
      this.Purchase.getSocialAccount()
    );
    console.log(client);
    if (!client) return false;
    return client;
  }

  async DeviceExist() {
    let client = await this.ClientRepository.findByDevice(
      this.Purchase.getDevice()
    );
    if (!client) return false;
    return client;
  }

  async CpfExist() {
    let client = await this.ClientRepository.findByCpf(this.Purchase.getCpf());
    if (!client) return false;
    return client;
  }
}
