export default class Device {
  Tipo: string;
  IpAddress: string;
  private UUID: string;

  constructor(UUID: string, Tipo: string) {
    this.UUID = UUID;
    Tipo = this.Tipo;
  }

  public getUUID(): string {
    return this.UUID;
  }

  public setUUID(value: string) {
    this.UUID = value;
  }
}
