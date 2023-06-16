import TypeOfFuelEntity from "../entities/TypeOfFuelEntity";

export default interface TypeOfFuelRepository {
    getAll(): Promise<TypeOfFuelEntity[]>;
}

export const TypeOfFuelRepositoryName = "TypeOfFuelRepository";
