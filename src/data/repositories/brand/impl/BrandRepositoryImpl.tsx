import { injectable } from "inversify";
import BrandRepository from "../../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../../domain/entities/BrandEntity";
import GetAllBrandsApiImpl from "./api/GetAllBrandsApiImpl";
import GetAllModelsOfBrandApiImpl from "./api/GetAllModelsOfBrandApiImpl";
import GetAllVersionOfModelsApiImpl from "./api/GetAllVersionOfModelsApiImpl";

@injectable()
export default class BrandRepositoryImpl implements BrandRepository {
    getAll = (): Promise<BrandEntity[]> => GetAllBrandsApiImpl()
    getModelsOfBrand = (brandId: string): Promise<string[]> => GetAllModelsOfBrandApiImpl(brandId);
    getVersionOfModel = (brandId: string, model: string): Promise<string[]> => GetAllVersionOfModelsApiImpl(brandId, model);
}