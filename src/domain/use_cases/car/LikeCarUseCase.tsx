import { Either } from "fp-ts/lib/Either";
import CarEntity from "../../entities/CarEntity";
import FavoriteCarsProvider from "../../providers/favoriteCars/FavoriteCarsProviderName";
import UserProvider from "../../providers/user/UserProvider";
import CarRepository from "../../repositories/CarRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { left, right } from "fp-ts/lib/Either";
import { injectable } from "inversify";

interface props { carRepository: CarRepository, favoriteCarProvider: FavoriteCarsProvider, userProvider: UserProvider }

@injectable()
export default class LikeCarUseCase {

    _carRepository: CarRepository;
    _favoriteCarProvider: FavoriteCarsProvider;
    _userProvider: UserProvider;

    constructor(_: props) {
        this._carRepository = _.carRepository;
        this._favoriteCarProvider = _.favoriteCarProvider;
        this._userProvider = _.userProvider;
    }
    async call(car: CarEntity, like: boolean): Promise<Either<ExceptionEntity, void>> {
        if (!this._userProvider.Actions.user == undefined) return left({ message: 'Debes iniciar sesión', code: 'unauthorized'})
        const response = await this._carRepository.likeCar(car.id, like);
        console.log(this._favoriteCarProvider.Actions);
        if (like) this._favoriteCarProvider.Actions.addCar(car);
        else this._favoriteCarProvider.Actions.removeCar(car);
        return right(response);
    }
}

export const LikeCarUseCaseName = "LikeCarUseCaseName";