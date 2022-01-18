import Visit from "../domain/Entities/Visit";

const AdapterJson = (Visit: Visit) => {
  console.log(Visit);
  let json = {
    //Name: Visit.getName() ? Visit.getName() : "",
    //Cellphone: Visit.getCellphone() ? Visit.getCellphone() : "",
    //Cpf: Visit.getCpf() ? Visit.getCpf() : "",
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
        Location: Visit.getLocation(),
        Type: Visit.getType(),
        SocialAccount: Visit.getSocialAccount(),
        Device: Visit.getDevice().getUUID(),
      },
    ],
    FirstVisit: {
      DateTime: Visit.getDateTime(),
      IpAddress: Visit.getIpAddress(),
      Location: Visit.getLocation(),
      Type: Visit.getType(),
      SocialAccount: Visit.getSocialAccount(),
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
  return json;
};
export default AdapterJson;
