export default class Location {
  constructor(
    readonly Country: string,
    readonly State: string,
    readonly City: string,
    readonly Coordinate?: string
  ) {}

  getCountry(): string {
    return this.Country;
  }

  getState(): string {
    return this.State;
  }

  getCity(): string {
    return this.City;
  }

  getCoordinate(): string {
    return this.Coordinate ? this.Coordinate : "";
  }
}
