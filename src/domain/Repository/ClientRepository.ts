import Client from "../Entities/Client";
import Device from "../Entities/Device";
import SocialAccount from "../Entities/SocialAccount";

export default interface ClientRepository {
  findByIpAddress(IpAddress: string | undefined): Promise<Client | undefined>;

  findBySocialAccount(SocialAccount: string): Promise<Client | undefined>;

  findByDevice(Device: string | undefined): Promise<Client | undefined>;

  findAndUpdate(Client: Client, ClientNew: any);

  findByUUID(Client: Client): Promise<Client | undefined>;

  add(Client: any): Promise<Client | undefined>;

  findByCpf(Client: any): Promise<Client | undefined>;

  all(): Promise<[] | undefined>;
}
