import { injectable } from "inversify";
import CityRepository from "../../../domain/repositories/CityRepository";
import CityEntity from "../../../domain/entities/CityEntity";
import GetAllCitiesApiImpl from "./impl/api/GetAllCitiesApiImpl";
import GetCitiesByDepartmentIdApiImpl from "./impl/api/GetCitiesByDepartmentIdApiImpl";

@injectable()
export class CityRepositoryDev implements CityRepository {
    getAll = (): Promise<CityEntity[]> => GetAllCitiesApiImpl();
    getCitiesByDepartment = (departmentId: string): Promise<CityEntity[]> => GetCitiesByDepartmentIdApiImpl(departmentId);
}