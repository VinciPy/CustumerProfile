import Device from "../domain/Entities/Device";
import Location from "../domain/Entities/Location";
import SocialAccount from "../domain/Entities/SocialAccount";
import Visit from "../domain/Entities/Visit";
import Adapter from "./Adapter";

export default class VisitAdapter implements Adapter {
  private Message: any;
  constructor(message: object) {
    this.Message = message;
    this.adapt();
  }

  adapt() {
    let DateTime = new Date();
    let ipAddress = this.Message.IpAddress;
    let CompanyId = this.Message.CompanyId;
    let location = new Location(
      this.Message.Location.Country,
      this.Message.Location.State,
      this.Message.Location.City
    );
    let socialAccount = new SocialAccount(
      this.Message.SocialAccount.UUID,
      this.Message.SocialAccount.SocialMedia
    );
    let device = new Device(
      this.Message.Device.UUID,
      this.Message.Device.Type,
      this.Message.Device.Description
    );
    return new Visit(
      DateTime,
      ipAddress,
      location,
      "online",
      socialAccount,
      device,
      CompanyId
    );
  }
}
