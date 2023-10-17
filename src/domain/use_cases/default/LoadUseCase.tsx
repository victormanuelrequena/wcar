import { injectable } from "inversify";
import GetAllAlliesUseCase from "../ally/GetAllAlliesUseCase";
import GetCurrentUserUseCase from "../auth/GetCurrentUserUseCase";
import GetAllBrandsUseCase from "../brand/GetAllBrandsUseCase";
import GetFavoriteCarsUseCase from "../car/GetFavoriteCarsUseCase";
import GetAllColorsUseCase from "../color/GetAllColorsUseCase";
import GetAllTagsUseCase from "../tag/GetAllTagsUseCase";
import GetAllTypeOfFuelsUseCase from "../typeOfFuel/GetAllTypeOfFuelsUseCase";
import GetAllTypeVehiclesUseCase from "../typeVehicle/GetAllTypeVehiclesUseCase";
import HostApi from "../../../data/settings/HostApi";

interface props {
    getAllAlliesUseCase: GetAllAlliesUseCase;
    getAllBrandsUseCase: GetAllBrandsUseCase;
    getAllColorsUseCase: GetAllColorsUseCase;
    getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase;
    getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase;
    getAllCitiesUseCase: GetAllTypeVehiclesUseCase;
    getFavoriteCarsUseCase: GetFavoriteCarsUseCase;
    getAllTagsUseCase: GetAllTagsUseCase;
    getCurrentUserUseCase: GetCurrentUserUseCase;
}

@injectable()
export default class LoadUseCase {
    _getAllAlliesUseCase: GetAllAlliesUseCase;
    _getAllBrandsUseCase: GetAllBrandsUseCase;
    _getAllColorsUseCase: GetAllColorsUseCase;
    _getAllTypeOfFueslUseCase: GetAllTypeOfFuelsUseCase;
    _getAllTypeOfVehiclesUseCase: GetAllTypeVehiclesUseCase;
    _getAllCitiesUseCase: GetAllTypeVehiclesUseCase;
    _getFavoriteCarsUseCase: GetFavoriteCarsUseCase;
    _getAllTagsUseCase: GetAllTagsUseCase;
    _getCurrentUserUseCase: GetCurrentUserUseCase;

    constructor(_: props) {
        this._getAllAlliesUseCase = _.getAllAlliesUseCase;
        this._getAllBrandsUseCase = _.getAllBrandsUseCase;
        this._getAllColorsUseCase = _.getAllColorsUseCase;
        this._getAllTypeOfFueslUseCase = _.getAllTypeOfFueslUseCase;
        this._getAllTypeOfVehiclesUseCase = _.getAllTypeOfVehiclesUseCase;
        this._getAllCitiesUseCase = _.getAllCitiesUseCase;
        this._getFavoriteCarsUseCase = _.getFavoriteCarsUseCase;
        this._getAllTagsUseCase = _.getAllTagsUseCase;
        this._getCurrentUserUseCase = _.getCurrentUserUseCase;
    }

    async call(): Promise<void> {
        try {
            try {
                await this._getAllAlliesUseCase.call();
            } catch (error) {
                console.log("_getAllAlliesUseCase", error);
            }
            try {
                await this._getAllBrandsUseCase.call();
            } catch (error) {
                console.log("_getAllBrandsUseCase", error);
            }
            try {
                await this._getAllColorsUseCase.call();
            } catch (error) {
                console.log("_getAllColorsUseCase", error);
            }
            try {
                await this._getAllTypeOfFueslUseCase.call();
            } catch (error) {
                console.log("_getAllTypeOfFueslUseCase", error);
            }
            try {
                await this._getAllTypeOfVehiclesUseCase.call();
            } catch (error) {
                console.log("_getAllTypeOfVehiclesUseCase", error);
            }
            try {
                await this._getAllCitiesUseCase.call();
            } catch (error) {
                console.log("_getAllCitiesUseCase", error);
            }
            try {
                await this._getFavoriteCarsUseCase.call();
            } catch (error) {
                console.log("_getFavoriteCarsUseCase", error);
            }
            try {
                await this._getAllTagsUseCase.call();
            } catch (error) {
                console.log("_getAllTagsUseCase", error);
            }
            try {
                await this._getCurrentUserUseCase.call();
            } catch (error) {
                console.log("_getCurrentUserUseCase", error);
            }

            // await Promise.all([
            //     await this._getAllAlliesUseCase.call(),
            //     await this._getAllBrandsUseCase.call(),
            //     await this._getAllColorsUseCase.call(),
            //     await this._getAllTypeOfFueslUseCase.call(),
            //     await this._getAllTypeOfVehiclesUseCase.call(),
            //     await this._getAllCitiesUseCase.call(),
            //     await this._getFavoriteCarsUseCase.call(),
            //     await this._getAllTagsUseCase.call(),
            //     await this._getCurrentUserUseCase.call()
            // ]);
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const LoadUseCaseName = "LoadUseCase";
