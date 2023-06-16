import TypeVehicleEntity from "../entities/TypeVehicleEntity";

export default interface TypeVehicleRepository{
    getAll(): Promise<TypeVehicleEntity[]>;
}

export const TypeOfVehicleRepositoryName = "TypeOfVehicleRepository";