import Location from "./Location";

export default class Company {
    constructor(readonly UUID: string, readonly Name: string, 
        readonly Location: Location){

    }
}