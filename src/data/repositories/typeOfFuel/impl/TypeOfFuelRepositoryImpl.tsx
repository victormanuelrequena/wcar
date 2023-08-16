import { injectable } from "inversify";
import TypeOfFuelRepository from "../../../../domain/repositories/TypeOfFuelRepository";
import TypeOfFuelEntity from "../../../../domain/entities/TypeOfFuelEntity";
import GetAllTypeFuelApiImpl from "./api/GetAllTypeFuelApiImpl";

@injectable()
export default class TypeOfFuelRepositoryImpl implements TypeOfFuelRepository {
    getAll = (): Promise<TypeOfFuelEntity[]> => GetAllTypeFuelApiImpl();

}