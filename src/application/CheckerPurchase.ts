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
    let Device = await this.DeviceExist();
    let cpf = await this.CpfExist();
    let ipExist = await this.ipExist();
    if (cpf) {
      return cpf;
    }
    if (Device) {
      return Device;
    }
    if (ipExist) {
      return ipExist;
    }
    return undefined;
  }

  async DeviceExist() {
    let client = await this.ClientRepository.findByDevice(
      this.Purchase.getDevice()?.getUUID()
    );
    if (!client) return false;
    return client;
  }

  async CpfExist() {
    if (this.Purchase.getClient().getCpf()?.getValue() == undefined)
      return false;
    let client = await this.ClientRepository.findByCpf(
      this.Purchase.getClient().getCpf()?.getValue()
    );
    if (!client) return false;
    return client;
  }

  async ipExist() {
    if (!this.Purchase.getIpAddress()) {
      return false;
    }
    let client = await this.ClientRepository.findByIpAddress(
      this.Purchase.getIpAddress()
    );
    if (!client) return false;
    return client;
  }
}
