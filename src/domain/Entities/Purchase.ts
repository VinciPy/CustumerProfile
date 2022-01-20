import Client from "./Client";
import Device from "./Device";
import Location from "./Location";

export default class Purchase {
  Client: Client;
  DatePurchase: Date;
  Amount: number;
  Discount: number;
  Products: string[];
  Device?: Device;
  Location: Location;
  CompanyId: string;

  constructor(
    Client: Client,
    DatePurchase: Date,
    Amount: number,
    Discount: number,
    Products: string[],
    Location: Location,
    CompanyId: string,
    Device?: Device
  ) {
    this.Client = Client;
    this.DatePurchase = DatePurchase;
    this.Amount = Amount;
    this.Discount = Discount;
    this.Products = Products;
    this.Location = Location;
    this.CompanyId = CompanyId;
    this.Device = Device;
  }

  public getDevice(): Device | undefined {
    return this.Device;
  }

  public setDevice(value: Device) {
    this.Device = value;
  }

  public getClient(): Client {
    return this.Client;
  }

  public getLocation(): Location {
    return this.Location;
  }

  public getDiscount(): number {
    return this.Discount;
  }

  public getProducts(): string[] {
    return this.Products;
  }

  public getAmount(): number {
    return this.Amount;
  }

  public getDatePurchase() {
    return this.DatePurchase;
  }

  public getCompanyId() {
    return this.CompanyId;
  }
}
