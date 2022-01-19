import Client from "./Client";
import Device from "./Device";
import Location from "./Location";

export default class Purchase {
  Client?: Client;
  DatePurchase: Date;
  Amount: number;
  Discount: number;
  Products: string[];
  private Device?: Device;
  Location: Location;

  constructor(
    Client: Client,
    DatePurchase: Date,
    Amount: number,
    Discount: number,
    Products: string[],
    Location: Location,
    Device?: Device
  ) {
    this.Client = Client;
    this.DatePurchase = DatePurchase;
    this.Amount = Amount;
    this.Discount = Discount;
    this.Products = Products;
    this.Location = Location;
    this.Device = Device;
  }

  public getDevice(): Device {
    return this.Device;
  }

  public setDevice(value: Device) {
    this.Device = value;
  }

  public getClient(): Client {
    return this.Client;
  }
}
