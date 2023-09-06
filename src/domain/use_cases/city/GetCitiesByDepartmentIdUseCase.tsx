import { injectable } from "inversify";
import CityEntity from "../../entities/CityEntity";
import CityRepository from "../../repositories/CityRepository";

interface props {
    cityRepository: CityRepository;
}

@injectable()
export default class GetCitiesByDepartmentIdUseCase {
    _cityRepository: CityRepository;

    constructor(_: props) {
        this._cityRepository = _.cityRepository;
    }

    async call(departmentId: string): Promise<CityEntity[]> {
        try {
            const cities = await this._cityRepository.getCitiesByDepartment(departmentId);
            return cities;
        } catch (error) {
            return [];
        }
    }
}

export const GetCitiesByDepartmentIdUseCaseName = "GetCitiesByDepartmentIdUseCaseName";