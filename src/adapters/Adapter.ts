import Visit from "../domain/Entities/Visit";
import Interaction from "../domain/Entities/Interaction";

export default interface Adapter {
  adapt(interaction: object): Interaction | Visit;
}
