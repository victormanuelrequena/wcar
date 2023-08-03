import CarEntity from "../entities/CarEntity";
import { TransmissionCar } from "../entities/CarEntity";

export default interface CarRepository {
    getSomeRandomCars(): Promise<CarEntity[]>;
    getRelatedCarsByCardIdUseCase(id: string): Promise<CarEntity[]>;
    likeCar(carId: string, like: boolean): Promise<void>;
    search(page:number, search?: string, brand?: string | undefined, year?: string | undefined, price?: number | undefined, type?: string[], transmission?: TransmissionCar, availability?: string | undefined): Promise<{cars: CarEntity[], maxPages: number}>;
    getCarById(id: string): Promise<CarEntity>;
    bookACarPayment(carId: string, paymentInfo: any): Promise<void>;
    getFavoriteCars(): Promise<CarEntity[]>;
}

export const CarRepositoryName = "CarRepository";