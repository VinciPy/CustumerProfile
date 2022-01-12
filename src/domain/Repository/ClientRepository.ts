import Client from "../Entities/Client";
import Device from "../Entities/Device";
import SocialAccount from "../Entities/SocialAccount";

export default interface ClientRepository {
  findByIpAddress(IpAddress: string): Promise<Client | undefined>;

  findBySocialAccount(
    SocialAccount: SocialAccount
  ): Promise<Client | undefined>;

  findByDevice(Device: Device): Promise<Client | undefined>;
}