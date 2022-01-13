export default class SocialAccount {
  private UUID: string;

  public getUUID(): string {
    return this.UUID;
  }

  public setUUID(value: string) {
    this.UUID = value;
  }
  constructor(UUID: string, readonly SocialMedia: string) {}
}
