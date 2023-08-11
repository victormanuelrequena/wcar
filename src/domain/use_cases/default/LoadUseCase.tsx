import GetAllAlliesUseCase from "../ally/GetAllAlliesUseCase";
import GetAllBrandsUseCase from "../brand/GetAllBrandsUseCase";
import GetFavoriteCarsUseCase from "../car/GetFavoriteCarsUseCase";
import GetAllColorsUseCase from "../color/GetAllColorsUseCase";
import GetAllTagsUseCase from "../tag/GetAllTagsUseCase";
import GetAllTypeOfFuelsUseCase from "../typeOfFuel/GetAllTypeOfFuelsUseCase";
import GetAllTypeVehiclesUseCase from "../typeVehicle/GetAllTypeVehiclesUseCase";

interface props {
    getAllAlliesUseCase: GetAllAlliesUseCase,
    getAllBrandsUseCase: GetAllBrandsUseCase,
    getAllColorsUseCase: GetAllColorsUseCase,
    getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase,
    getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase,
    getAllCitiesUseCase: GetAllTypeVehiclesUseCase,
    getFavoriteCarsUseCase: GetFavoriteCarsUseCase,
    getAllTagsUseCase: GetAllTagsUseCase,
}

export default class LoadUseCase {
    _getAllAlliesUseCase: GetAllAlliesUseCase;
    _getAllBrandsUseCase: GetAllBrandsUseCase;
    _getAllColorsUseCase: GetAllColorsUseCase;
    _getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase;
    _getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase;
    _getAllCitiesUseCase: GetAllTypeVehiclesUseCase;
    _getFavoriteCarsUseCase: GetFavoriteCarsUseCase;
    _getAllTagsUseCase: GetAllTagsUseCase;

    constructor(_: props) {
        this._getAllAlliesUseCase = _.getAllAlliesUseCase;
        this._getAllBrandsUseCase = _.getAllBrandsUseCase;
        this._getAllColorsUseCase = _.getAllColorsUseCase;
        this._getAllTypeOfFueslUseCase = _.getAllTypeOfFueslUseCase;
        this._getAllTypeOfVehiclesUseCase = _.getAllTypeOfVehiclesUseCase;
        this._getAllCitiesUseCase = _.getAllCitiesUseCase;
        this._getFavoriteCarsUseCase = _.getFavoriteCarsUseCase;
        this._getAllTagsUseCase = _.getAllTagsUseCase;
    }

    async call(): Promise<void> {
        try {
            await Promise.all([
                await this._getAllAlliesUseCase.call(),
                await this._getAllBrandsUseCase.call(),
                await this._getAllColorsUseCase.call(),
                await this._getAllTypeOfFueslUseCase.call(),
                await this._getAllTypeOfVehiclesUseCase.call(),
                await this._getAllCitiesUseCase.call(),
                await this._getFavoriteCarsUseCase.call(),
                await this._getAllTagsUseCase.call(),
            ]);
        } catch (error) {
        }
    }
}