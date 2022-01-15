import Client from "../domain/Entities/Client";
import Device from "../domain/Entities/Device";
import Visit from "../domain/Entities/Visit";
import ClientRepository from "../domain/Repository/ClientRepository";
import Checker from "./Checker";

export default class CheckerVisit implements Checker {
  Visit: Visit;
  ClientRepository: ClientRepository;

  constructor(Visit: Visit, ClientRepository: ClientRepository) {
    this.Visit = Visit;
    this.ClientRepository = ClientRepository;
  }

  async verifyCustomer(): Promise<undefined | Client> {
    let ipExist = await this.ipExist();
    let SocialAccount = await this.SocialAccountExist();
    let Device = await this.DeviceExist();
    if (SocialAccount && ipExist) {
      return SocialAccount;
    }
    if (ipExist && Device) {
      return Device;
    }
    if (SocialAccount && Device) {
      return Device;
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

  async DeviceExist() {
    let client = await this.ClientRepository.findByDevice(
      this.Visit.getDevice()
    );
    if (!client) return false;
    return client;
  }
}
