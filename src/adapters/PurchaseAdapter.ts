import Interaction from "../domain/Entities/Interaction";
import Visit from "../domain/Entities/Visit";
import Adapter from "./Adapter";

export default class PurchaseAdapter implements Adapter {
  adapt(): Interaction | Visit {
    throw new Error("Method not implemented.");
  }
}
