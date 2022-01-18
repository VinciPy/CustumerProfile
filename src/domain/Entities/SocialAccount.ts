export default class SocialAccount {
  private UUID: string;

  public getUUID(): string {
    return this.UUID;
  }

  public setUUID(value: string) {
    this.UUID = value;
  }

  public getSocialMedia(): string {
    return this.SocialMedia;
  }
  constructor(UUID: string, readonly SocialMedia: string) {
    this.UUID = UUID;
  }
}
