import { injectable } from "inversify";
import CarRepository from "../../../../domain/repositories/CarRepository";
import CarEntity, { TransmissionCar } from "../../../../domain/entities/CarEntity";
import OrderByEntity from "../../../../domain/entities/OrderByEntity";
import GetSomeRandomCarsApiImpl from "./api/GetSomeRandomCarsApiImpl";
import LikeCarApiImpl from "./api/LikeCarApiImpl";
import GetRelatedCarsByCardIdApiImpl from "./api/GetRelatedCarsByCardIdApiImpl";
import SearchCarApiImpl from "./api/SearchCarApiImpl";
import GetCarByIdApiImpl from "./api/GetCarByIdApiImpl";
import { Either, right, left } from "fp-ts/lib/Either";
import BookACarPaymentApiImpl from "./api/BookACarPaymentApiImpl";
import ExceptionEntity from "../../../../domain/entities/ExceptionEntity";
import GetFavoriteCarsApiImpl from "./api/GetFavoriteCarsApiImpl";

@injectable()
export default class CarRepositoryImpl implements CarRepository {
    getSomeRandomCars = (): Promise<CarEntity[]> => GetSomeRandomCarsApiImpl();
    getRelatedCarsByCardIdUseCase = (id: string): Promise<CarEntity[]> => GetRelatedCarsByCardIdApiImpl(id);
    likeCar = (carId: string, like: boolean): Promise<void> => LikeCarApiImpl(carId, like);
    search = (page: number, search: string, brand: string | undefined, modelId: string | undefined, year: string | undefined, price: { min: number; max: number; } | undefined, type: string, transmission: TransmissionCar | undefined, tag: string | undefined, km: { min: number; max: number; } | undefined, fuelId: string | undefined, colorId: string | undefined, plateNumber: string | undefined, orderBy: OrderByEntity | undefined): Promise<{ cars: CarEntity[]; maxPages: number; }> => SearchCarApiImpl(page, search, brand, modelId, year, price, type, transmission, tag, km, fuelId, colorId, plateNumber, orderBy);
    getCarById = (id: string): Promise<CarEntity | undefined> => GetCarByIdApiImpl(id);
    bookACarPayment = (carId: string, paymentInfo: any): Promise<Either<ExceptionEntity, void>> => BookACarPaymentApiImpl(carId, paymentInfo);
    getFavoriteCars = (): Promise<CarEntity[]> => GetFavoriteCarsApiImpl();
}