import { injectable } from "inversify";
import BrandRepository from "../../../domain/repositories/BrandRepository";
import BrandEntity from "../../../domain/entities/BrandEntity";

const _brandTest:BrandEntity = {
    id:"1",
    name:"Mercedez"
}
@injectable()
class BrandRepositoryTest implements BrandRepository{
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

export default BrandRepositoryTest;