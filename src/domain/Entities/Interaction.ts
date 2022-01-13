import Client from "./Client";
import Visit from "./Visit";

export default class Interaction {
  private Visit: Visit;
  private Client: Client;
  private Description: string;
  private Trigger: string;

  public getVisit(): Visit {
    return this.Visit;
  }

  public setVisit(value: Visit) {
    this.Visit = value;
  }

  public getClient(): Client {
    return this.Client;
  }

  public setClient(value: Client) {
    this.Client = value;
  }
}
