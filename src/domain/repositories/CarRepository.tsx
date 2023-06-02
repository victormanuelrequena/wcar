import CarEntity from "../entities/CarEntity";

export default interface CarRepository {
    getSomeRandomCars(): Promise<CarEntity[]>;
    likeCar(id: string, like: boolean): Promise<void>;
}

export const CarRepositoryName = "CarRepository";