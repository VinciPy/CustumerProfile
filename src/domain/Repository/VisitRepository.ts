import Visit from "../Entities/Visit";

export default interface VisitRepository {
    save(Visit: Visit): Promise<void>;
}