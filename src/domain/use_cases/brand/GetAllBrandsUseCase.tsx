import BrandsProvider from "../../providers/brand/BrandProvider";
import BrandRepository from "../../repositories/BrandRepository";

interface props { brandRepository: BrandRepository, brandsProvider: BrandsProvider }

export default class GetAllBrandsUseCase{
    
    _brandRepository: BrandRepository;
    _brandsProvider: BrandsProvider;

    constructor(_:props) {
        this._brandRepository = _.brandRepository;
        this._brandsProvider = _.brandsProvider;
    }
    async call() {
        try {
            const response = await this._brandRepository.getAll();
            this._brandsProvider.Actions.setBrands(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}