export default class Device {
  Tipo: string;
  Description: string;
  private UUID: string;

  constructor(UUID: string, Tipo: string, Description: string) {
    this.UUID = UUID;
    this.Tipo = Tipo;
    this.Description = Description;
  }

  public getUUID(): string {
    return this.UUID;
  }

  public setUUID(value: string) {
    this.UUID = value;
  }

  public getTipo(): string {
    return this.Tipo;
  }

  public getDescription(): string {
    return this.Description;
  }
}
