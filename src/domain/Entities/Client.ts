import Cpf from "./Cpf";
import Device from "./Device";
import Location from "./Location";
import Visit from "./Visit";

export default class Cliente {

    private UUID: string;
    private Cellphone: string;
    private Cpf: Cpf;
    private Location: Location;
    private Devices: Device[];
    private Visits: Visit[];
    private FirstVisit: Visit;

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

    constructor(UUID:string, Location: Location, Devices: Device[], Visits: Visit[], FirstVisit: Visit[]) {
        this.UUID = UUID;
        this.Location = Location;
        this.Devices = Devices;
        this.Visits = Visits;
        this.FirstVisit = FirstVisit;
    };

}