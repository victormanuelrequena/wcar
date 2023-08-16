import { injectable } from "inversify";
import TypeVehicleRepository from "../../../../domain/repositories/TypeVehicleRepository";
import TypeVehicleEntity from "../../../../domain/entities/TypeVehicleEntity";
import GetAllTypeOfVehicleApiImpl from "./api/GetAllTypeOfVehicleApiImpl";

@injectable()
export default class TypeVehicleRepositoryImpl implements TypeVehicleRepository {
    getAll = (): Promise<TypeVehicleEntity[]> => GetAllTypeOfVehicleApiImpl();
}