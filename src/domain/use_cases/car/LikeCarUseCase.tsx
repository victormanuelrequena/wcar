import CarEntity from "../../entities/CarEntity";
import FavoriteCarsProvider from "../../providers/favoriteCars/FavoriteCarsProviderName";
import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository, favoriteCarProvider: FavoriteCarsProvider }

export default class LikeCarUseCase {

    _carRepository: CarRepository;
    _favoriteCarProvider: FavoriteCarsProvider;

    constructor(_: props) {
        this._carRepository = _.carRepository;
        this._favoriteCarProvider = _.favoriteCarProvider;
    }
    async call(car: CarEntity, like: boolean): Promise<void> {
        const response = await this._carRepository.likeCar(car.id, like);
        console.log(this._favoriteCarProvider.Actions);
        if(like) this._favoriteCarProvider.Actions.addCar(car);
        else this._favoriteCarProvider.Actions.removeCar(car);
        return response;
    }
}