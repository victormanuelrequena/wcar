import { injectable } from "inversify";
import BrandRepository from "../../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../../domain/entities/BrandEntity";
import GetAllBrandsApiImpl from "./api/GetAllBrandsApiImpl";
import GetAllModelsOfBrandApiImpl from "./api/GetAllModelsOfBrandApiImpl";
import GetAllVersionOfModelsApiImpl from "./api/GetAllVersionOfModelsApiImpl";
import ModelEntity from "../../../../domain/entities/ModelEntity";
import VersionModelEntity from "../../../../domain/entities/VersionModelEntity";

@injectable()
export default class BrandRepositoryImpl implements BrandRepository {
    getAll = (): Promise<BrandEntity[]> => GetAllBrandsApiImpl()
    getModelsOfBrand = (brandId: string): Promise<ModelEntity[]> => GetAllModelsOfBrandApiImpl(brandId);
    getVersionOfModel = (brandId: string, model: string): Promise<VersionModelEntity[]> => GetAllVersionOfModelsApiImpl(brandId, model);
}