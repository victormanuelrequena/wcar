import BrandEntity from "../entities/BrandEntity";

export default interface BrandRepository {
    getAll(): Promise<BrandEntity[]>;
    getModelsOfBrand(brandId: string): Promise<string[]>;
    getVersionOfModel(brandId: string, model: string): Promise<string[]>;
}

export const BrandRepositoryName = "BrandRepository";