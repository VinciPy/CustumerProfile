export default class Device {

    Tipo: string;
    IpAddress: string;    

    constructor(readonly UUID: string, Tipo: string) {
        Tipo = this.Tipo
    } 
}