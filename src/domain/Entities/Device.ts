export default class Device {

    Tipo: string;
    IpAddress: string;    

    constructor(readonly UUID: string, Tipo: string, IpAddress: string) {
        Tipo = this.Tipo
        this.IpAddress = this.IpAddress;
    } 
}