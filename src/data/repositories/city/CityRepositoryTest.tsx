import { injectable } from "inversify";
import CityRepository from "../../../domain/repositories/CityRepository";
import CityEntity from "../../../domain/entities/CityEntity";

const _test: CityEntity = {
    id: "1",
    name: "Cali"
};

@injectable()
export class CityRepositoryTest implements CityRepository {
    getCitiesByDepartment(departmentId: string): Promise<CityEntity[]> {
        return new Promise<CityEntity[]>((resolve, reject) => {
            resolve([_test]);
        });
    }
    getAll(): Promise<CityEntity[]> {
        return new Promise<CityEntity[]>((resolve, reject) => {
            resolve([_test]);
        });
    }
}