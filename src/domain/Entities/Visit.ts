import Device from "./Device";
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
  private Device: Device;

  public getDevice(): Device {
    return this.Device;
  }
  public setDevice(value: Device) {
    this.Device = value;
  }

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
