import { injectable } from "inversify";
import CarEntity from "../../entities/CarEntity";
import CarRepository from "../../repositories/CarRepository";
import FavoriteCarsProvider from "../../providers/favoriteCars/FavoriteCarsProviderName";

interface props {
    carRepository: CarRepository;
    favoriteCarProvider: FavoriteCarsProvider;
}

@injectable()
export default class GetFavoriteCarsUseCase {
    _carRepository: CarRepository;
    _favoriteCarProvider: FavoriteCarsProvider;

    constructor(_: props) {
        this._carRepository = _.carRepository;
        this._favoriteCarProvider = _.favoriteCarProvider;
    }

    async call(): Promise<CarEntity[]> {
        const favoriteCars = await this._carRepository.getFavoriteCars();
        this._favoriteCarProvider.Actions.setFavoriteCars(favoriteCars);
        return favoriteCars;
    }
}

export const GetFavoriteCarsUseCaseName = "GetFavoriteCarsUseCaseName";