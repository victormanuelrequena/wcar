import CityEntity from "../entities/CityEntity";

export default interface CityRepository{
    getAll(): Promise<CityEntity[]>;
}

export const CityRepositoryName = "CityRepository";