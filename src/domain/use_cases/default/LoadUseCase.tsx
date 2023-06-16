import GetAllAlliesUseCase from "../ally/GetAllAlliesUseCase";
import GetAllBrandsUseCase from "../brand/GetAllBrandsUseCase";
import GetAllColorsUseCase from "../color/GetAllColorsUseCase";
import GetAllTypeOfFuelsUseCase from "../typeOfFuel/GetAllTypeOfFuelsUseCase";
import GetAllTypeVehiclesUseCase from "../typeVehicle/GetAllTypeVehiclesUseCase";

interface props {
    getAllAlliesUseCase: GetAllAlliesUseCase,
    getAllBrandsUseCase: GetAllBrandsUseCase,
    getAllColorsUseCase: GetAllColorsUseCase,
    getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase,
    getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase,
}

export default class LoadUseCase {
    _getAllAlliesUseCase: GetAllAlliesUseCase;
    _getAllBrandsUseCase: GetAllBrandsUseCase;
    _getAllColorsUseCase: GetAllColorsUseCase;
    _getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase;
    _getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase;

    constructor(_: props) {
        this._getAllAlliesUseCase = _.getAllAlliesUseCase;
        this._getAllBrandsUseCase = _.getAllBrandsUseCase;
        this._getAllColorsUseCase = _.getAllColorsUseCase;
        this._getAllTypeOfFueslUseCase = _.getAllTypeOfFueslUseCase;
        this._getAllTypeOfVehiclesUseCase = _.getAllTypeOfVehiclesUseCase;
    }

    async call() {
        await Promise.all([
            await this._getAllAlliesUseCase.call(),
            await this._getAllBrandsUseCase.call(),
            await this._getAllColorsUseCase.call(),
            await this._getAllTypeOfFueslUseCase.call(),
            await this._getAllTypeOfVehiclesUseCase.call(),
        ])
    }
}