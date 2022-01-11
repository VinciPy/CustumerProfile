import Devices from "./Devices";
import Location from "./Location";
import Visit from "./Visit";

export default class Cliente {
    private _UUID: string;
    private Location: Location;
    private Devices: Devices[];
    private Visits: Visit[];
    private FirstVisit: Visit;

    public getFirstVisit(): Visit {
        return this.FirstVisit;
    }
    public setFirstVisit(value: Visit) {
        this.FirstVisit = value;
    }

    public getUUID(): string {
        return this._UUID;
    }

    public setUUID(value: string) {
        this._UUID = value;
    }

    public getLocation(): Location {
        return this.Location;
    }

    public setLocation(value: Location) {
        this.Location = value;
    }
    public getDevices(): Devices[] {
        return this.Devices;
    }

    public setDevices(value: Devices[]) {
        this.Devices = value;
    }

    public getVisits(): Visit[] {
        return this.Visits;
    }
    public setVisits(value: Visit[]) {
        this.Visits = value;
    }

    constructor() {
        
    };

}