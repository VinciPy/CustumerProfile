import Purchase from "../domain/Entities/Purchase";
import Visit from "../domain/Entities/Visit";

const AdapterJson = (Visit: any) => {
  let json: object;
  if (Visit instanceof Purchase) {
    json = {
      Name: Visit.getClient().getName(),
      Cellphone: Visit.getClient().getCellphone(),
      Cpf: Visit.getClient().getCpf()?.getValue(),
      Location: [
        {
          Country: Visit.getLocation() ? Visit.getLocation().getCountry() : "",
          State: Visit.getLocation() ? Visit.getLocation().getState() : "",
          City: Visit.getLocation() ? Visit.getLocation().getCity() : "",
          Coordinate: Visit.getLocation()
            ? Visit.getLocation().getCoordinate()
            : "",
        },
      ],
      Devices: [
        {
          Tipo: Visit.getDevice()?.getTipo(),
          UUID: Visit.getDevice()?.getUUID(),
        },
      ],
      Purchases: [
        {
          DatePurchase: Visit.getDatePurchase(),
          Amount: Visit.getAmount(),
          Discount: Visit.getDiscount(),
          Products: Visit.getProducts(),
        },
      ],
    };
  } else {
    json = {
      Name: "",
      Cellphone: "",
      Cpf: "",
      Location: [
        {
          Country: Visit.getLocation() ? Visit.getLocation().getCountry() : "",
          State: Visit.getLocation() ? Visit.getLocation().getState() : "",
          City: Visit.getLocation() ? Visit.getLocation().getCity() : "",
          Coordinate: Visit.getLocation()
            ? Visit.getLocation().getCoordinate()
            : "",
        },
      ],
      Devices: [
        {
          Tipo: Visit.getDevice().getTipo(),
          UUID: Visit.getDevice().getUUID(),
        },
      ],
      Visits: [
        {
          DateTime: Visit.getDateTime(),
          IpAddress: Visit.getIpAddress(),
          Location: Visit.getLocation().getCountry(),
          Type: Visit.getType(),
          SocialAccount: Visit.getSocialAccount().getSocialMedia(),
          Device: Visit.getDevice().getUUID(),
        },
      ],
      FirstVisit: {
        DateTime: Visit.getDateTime(),
        IpAddress: Visit.getIpAddress(),
        Location: Visit.getLocation().getCountry(),
        Type: Visit.getType(),
        SocialAccount: Visit.getSocialAccount().getSocialMedia(),
        Device: Visit.getDevice().getUUID(),
      },
      IpAddress: Visit.getIpAddress(),
      SocialAccounts: [
        {
          UUID: Visit.getSocialAccount()
            ? Visit.getSocialAccount().getUUID()
            : "",
          SocialMedia: Visit.getSocialAccount()
            ? Visit.getSocialAccount().getSocialMedia()
            : "",
        },
      ],
    };
  }
  return json;
};
export default AdapterJson;
