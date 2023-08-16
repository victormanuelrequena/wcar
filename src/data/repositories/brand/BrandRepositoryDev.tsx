import { injectable } from "inversify";
import BrandRepository from "../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../domain/entities/BrandEntity";
import GetAllBrandsApiImpl from "./impl/api/GetAllBrandsApiImpl";

@injectable()
export default class BrandRepositoryDev implements BrandRepository {
    getAll = (): Promise<BrandEntity[]> => GetAllBrandsApiImpl()
    async getModelsOfBrand(brandId: string): Promise<string[]> {
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    }

    async getVersionOfModel(brandId: string, model: string): Promise<string[]> {
        return ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"];
    }

}