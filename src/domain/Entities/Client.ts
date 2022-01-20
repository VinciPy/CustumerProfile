import Cpf from "./Cpf";
import Device from "./Device";
import Location from "./Location";
import SocialAccount from "./SocialAccount";
import Visit from "./Visit";

export default class Client {
  private UUID?: string;
  private Name?: string;
  private Cellphone?: string;
  private Cpf?: Cpf;
  private Location?: Location;
  private Devices?: Device[];
  private Visits?: Visit[];
  private FirstVisit?: Visit;
  private IpAddress?: string;
  private SocialAccount?: SocialAccount;

  public getSocialAccount(): SocialAccount | undefined {
    return this.SocialAccount;
  }
  public setSocialAccount(value: SocialAccount) {
    this.SocialAccount = value;
  }

  public getFirstVisit(): Visit | undefined {
    return this.FirstVisit;
  }

  public setFirstVisit(value: Visit) {
    this.FirstVisit = value;
  }

  public getUUID(): string | undefined {
    return this.UUID;
  }

  public setUUID(value: string) {
    this.UUID = value;
  }

  public getLocation(): Location | undefined {
    return this.Location;
  }

  public setLocation(value: Location) {
    this.Location = value;
  }

  public getDevices(): Device[] | undefined {
    return this.Devices;
  }

  public setDevices(value: Device[]) {
    this.Devices = value;
  }

  public getVisits(): Visit[] | undefined {
    return this.Visits;
  }

  public setVisits(value: Visit[]) {
    this.Visits = value;
  }

  public getCpf(): Cpf | undefined {
    return this.Cpf;
  }

  public getName(): string | undefined {
    return this.Name;
  }

  public getCellphone(): string | undefined {
    return this.Cellphone;
  }

  constructor(Name: string, Cellphone: string, Cpf: Cpf) {
    this.Name = Name;
    this.Cellphone = Cellphone;
    this.Cpf = Cpf;
  }
}
