import { injectable } from "inversify";
import BrandRepository from "../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../domain/entities/BrandEntity";
import GetAllBrandsApiImpl from "./impl/api/GetAllBrandsApiImpl";
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
    async getModelsOfBrand(brandId: string): Promise<string[]> {
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    }

    async getVersionOfModel(brandId: string, model: string): Promise<string[]> {
        return ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"];
    }

}