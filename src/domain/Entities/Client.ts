import Cpf from "./Cpf";
import Device from "./Device";
import Location from "./Location";
import SocialAccount from "./SocialAccount";
import Visit from "./Visit";

export default class Client {

    private UUID: string;
    private Name: string;
    private Cellphone: string;
    private Cpf: Cpf;
    private Location: Location;
    private Devices: Device[];
    private Visits: Visit[];
    private FirstVisit: Visit;
    private IpAddress: string;
    private SocialAccount: SocialAccount;

    public getSocialAccount(): SocialAccount {
        return this.SocialAccount;
    }
    public setSocialAccount(value: SocialAccount) {
        this.SocialAccount = value;
    }

    public getFirstVisit(): Visit {
        
      return this.FirstVisit;
    };

    public setFirstVisit(value: Visit) {
        this.FirstVisit = value;
    }

    public getUUID(): string {
        return this.UUID;
    }

    public setUUID(value: string) {
        this.UUID = value;
    }

    public getLocation(): Location {
        return this.Location;
    }

    public setLocation(value: Location) {
        this.Location = value;
    }
    
    public getDevices(): Device[] {
        return this.Devices;
    }

    public setDevices(value: Device[]) {
        this.Devices = value;
    }

    public getVisits(): Visit[] {
        return this.Visits;
    }

    public setVisits(value: Visit[]) {
        this.Visits = value;
    }

    constructor(UUID:string, Location: Location, Devices: Device[], 
        Visits: Visit[], FirstVisit: Visit, Name: string) {
        this.UUID = UUID;
        this.Location = Location;
        this.Devices = Devices;
        this.Visits = Visits;
        this.FirstVisit = FirstVisit;
        this.Name = Name;
    };

}