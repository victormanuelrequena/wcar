import { injectable } from "inversify";
import BrandEntity from "../../entities/BrandEntity";
import BrandRepository from "../../repositories/BrandRepository";

interface props {
    brandRepository: BrandRepository,
}

@injectable()
export default class GetModelsByBrandUseCase {
    _brandRepository: BrandRepository;

    constructor(_: props) {
        this._brandRepository = _.brandRepository;
    }
    async call(brandId: string): Promise<string[]> {
        try {
            const response = await this._brandRepository.getModelsOfBrand(brandId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetModelsByBrandUseCaseName = "GetModelsByBrandUseCaseName";