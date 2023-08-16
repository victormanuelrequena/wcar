import { injectable } from "inversify";
import CityRepository from "../../../../domain/repositories/CityRepository";
import GetAllCitiesApiImpl from "./api/GetAllCitiesApiImpl";
import CityEntity from "../../../../domain/entities/CityEntity";

@injectable()
export default class CityRepositoryImpl implements CityRepository{
    getAll = (): Promise<CityEntity[]> => GetAllCitiesApiImpl();
}