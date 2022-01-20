import Device from "./Device";
import Location from "./Location";
import SocialAccount from "./SocialAccount";

enum Types {
  Online,
  Offline,
}

export default class Visit {
  private DateTime: Date;
  private IpAddress: string;
  private Location: Location;
  private Type: string;
  private SocialAccount: SocialAccount;
  private Device: Device;
  private CompanyId: string;

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

  public getLocation(): Location {
    return this.Location;
  }

  public getType(): string {
    return this.Type;
  }

  public getDateTime() {
    return this.DateTime;
  }
  public getCompanyId() {
    return this.CompanyId;
  }

  constructor(
    DateTime: Date,
    IpAddress: string,
    Location: Location,
    Type: string,
    SocialAccount: SocialAccount,
    Device: Device,
    CompanyId: string
  ) {
    (this.DateTime = DateTime),
      (this.IpAddress = IpAddress),
      (this.Location = Location),
      (this.Type = Type),
      (this.SocialAccount = SocialAccount),
      ((this.Device = Device), (this.CompanyId = CompanyId));
  }
}
