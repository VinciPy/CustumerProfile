import Client from "../Entities/Client";
import SocialAccount from "../Entities/SocialAccount";

export default interface ClientRepository {
  findByIpAddress(IpAddress: string): Promise<Client | undefined>;

  findBySocialAccount(
    SocialAccount: SocialAccount
  ): Promise<Client | undefined>;
}
