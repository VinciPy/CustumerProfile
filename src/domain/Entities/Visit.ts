import SocialAccount from "./SocialAccount";

enum Types {
  Online,
  Offline,
}

export default class Visit {
  private DateTime: Date;
  private IpAddress: string;
  private Location: Location;
  private Type: Types;
  private SocialAccount: SocialAccount;

  public getSocialAccount(): SocialAccount {
    return this.SocialAccount;
  }
  public setSocialAccount(value: SocialAccount) {
    this.SocialAccount = value;
  }

  public getIpAddress(): string {
    return this.IpAddress;
  }

  public setIpAddress(value: string) {
    this.IpAddress = value;
  }

  constructor() {}
}
