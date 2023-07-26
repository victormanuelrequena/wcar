import BrandEntity from "../../entities/BrandEntity";
import BrandRepository from "../../repositories/BrandRepository";

interface props {
    brandRepository: BrandRepository,
}

export default class GetModelVersionByModelAndBrandIdUseCase {
    _brandRepository: BrandRepository;

    constructor(_: props) {
        this._brandRepository = _.brandRepository;
    }
    async call(brandId: string, model: string) {
        try {
            const response = await this._brandRepository.getVersionOfModel(brandId, model);
            return response;
        } catch (error) {
            throw error;
        }
    }
}