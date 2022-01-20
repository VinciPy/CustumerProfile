import Client from "../domain/Entities/Client";
import Cpf from "../domain/Entities/Cpf";
import Device from "../domain/Entities/Device";
import Location from "../domain/Entities/Location";
import Purchase from "../domain/Entities/Purchase";
import Adapter from "./Adapter";

export default class PurchaseAdapter implements Adapter {
  private Message: any;
  constructor(message: object) {
    this.Message = message;
    this.adapt();
  }
  adapt(): Purchase {
    let DateTime = new Date();
    let Amount = this.Message.Amount;
    let Discount = this.Message.Discount;
    let CompanyId = this.Message.CompanyId;
    let client = new Client(
      this.Message.Client.Name,
      this.Message.Client.Cellphone,
      new Cpf(this.Message.Client.CPF)
    );
    let location = new Location(
      this.Message.Location.Country,
      this.Message.Location.State,
      this.Message.Location.City
    );
    let Products = this.Message.Products;
    let device = new Device(
      this.Message.Device.UUID,
      this.Message.Device.Type,
      this.Message.Device.Description
    );
    return new Purchase(
      client,
      DateTime,
      Amount,
      Discount,
      Products,
      location,
      CompanyId,
      device
    );
  }
}
