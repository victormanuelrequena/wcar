import { injectable } from "inversify";
import BrandRepository from "../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../domain/entities/BrandEntity";
import GetAllBrandsApiImpl from "./impl/api/GetAllBrandsApiImpl";
import ModelEntity from "../../../domain/entities/ModelEntity";
import VersionModelEntity from "../../../domain/entities/VersionModelEntity";
const _brandTest: BrandEntity = {
    id: "1",
    name: "Mercedez",
    image: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png"
}

@injectable()
export default class BrandRepositoryDev implements BrandRepository {
    async getAll(): Promise<BrandEntity[]> {
        return [_brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest];
    }
    async getModelsOfBrand(brandId: string): Promise<ModelEntity[]> {
        return [_brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest];
    }

    async getVersionOfModel(brandId: string, model: string): Promise<VersionModelEntity[]> {
        return [_brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest, _brandTest];
    }

}