import { Either } from "fp-ts/lib/Either";
import CarEntity from "../entities/CarEntity";
import { TransmissionCar } from "../entities/CarEntity";
import OrderByEntity from "../entities/OrderByEntity";
import ExceptionEntity from "../entities/ExceptionEntity";

export default interface CarRepository {
    getSomeRandomCars(): Promise<CarEntity[]>;
    getRelatedCarsByCardIdUseCase(id: string): Promise<CarEntity[]>;
    likeCar(carId: string, like: boolean): Promise<void>;
    search(
        page: number,
        search: string,
        brand: string | undefined,
        modelId: string | undefined,
        year: string | undefined,
        price: { min: number; max: number } | undefined,
        type: string,
        transmission: TransmissionCar | undefined,
        tag: string | undefined,
        km: { min: number; max: number } | undefined,
        fuelId: string | undefined,
        colorId: string | undefined,
        plateNumber: string | undefined,
        orderBy: OrderByEntity | undefined,
        claims: boolean | undefined,
        amount_claims: number | undefined,
        warranty: boolean | undefined,
        type_warranty
        
        : string | undefined
    ): Promise<{ cars: CarEntity[]; maxPages: number }>;
    getCarById(id: string): Promise<CarEntity | undefined>;
    bookACarPayment(carId: string, paymentInfo: any): Promise<Either<ExceptionEntity, void>>;
    getFavoriteCars(): Promise<CarEntity[]>;
}

export const CarRepositoryName = "CarRepository";
