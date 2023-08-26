import { injectable } from "inversify";
import BrandEntity from "../../entities/BrandEntity";
import BrandRepository from "../../repositories/BrandRepository";
import VersionModelEntity from "../../entities/VersionModelEntity";

interface props {
    brandRepository: BrandRepository,
}

@injectable()
export default class GetModelVersionByModelAndBrandIdUseCase {
    _brandRepository: BrandRepository;

    constructor(_: props) {
        this._brandRepository = _.brandRepository;
    }
    async call(brandId: string, model: string): Promise<VersionModelEntity[]> {
        try {
            const response = await this._brandRepository.getVersionOfModel(brandId, model);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetModelVersionByModelAndBrandIdUseCaseName = "GetModelVersionByModelAndBrandIdUseCaseName";