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
}

export default BrandRepositoryTest;