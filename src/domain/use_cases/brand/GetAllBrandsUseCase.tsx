import { injectable } from "inversify";
import BrandEntity from "../../entities/BrandEntity";
import BrandsProvider from "../../providers/brand/BrandProvider";
import BrandRepository from "../../repositories/BrandRepository";

interface props { brandRepository: BrandRepository, brandProvider: BrandsProvider }

@injectable()
export default class GetAllBrandsUseCase {

    _brandRepository: BrandRepository;
    _brandProvider: BrandsProvider;

    constructor(_: props) {
        this._brandRepository = _.brandRepository;
        this._brandProvider = _.brandProvider;
    }
    async call(): Promise<BrandEntity[]> {
        try {
            const response = await this._brandRepository.getAll();
            this._brandProvider.Actions.setBrands(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAllBrandsUseCaseName = "GetAllBrandsUseCaseName";