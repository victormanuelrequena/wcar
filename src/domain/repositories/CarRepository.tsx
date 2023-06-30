import CarEntity from "../entities/CarEntity";
import { TransmissionCar } from "../entities/CarEntity";

export default interface CarRepository {
    getSomeRandomCars(): Promise<CarEntity[]>;
    likeCar(id: string, like: boolean): Promise<void>;
    search(page:number, search?: string, brand?: string | undefined, year?: string | undefined, price?: number | undefined, type?: string[], transmission?: TransmissionCar, availability?: string | undefined): Promise<{cars: CarEntity[], maxPages: number}>;
    getCarById(id: string): Promise<CarEntity>;
}

export const CarRepositoryName = "CarRepository";