enum Types {
    Online,
    Offline,
}

export default class Visit {
   private DateTime: Date;
   private IpAddress: string;
   private Location: Location;
   private Type: Types; 
}