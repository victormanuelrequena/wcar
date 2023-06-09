import { injectable } from "inversify";
import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import CarRepository from "../../../domain/repositories/CarRepository";

const _testCar:CarEntity = {
    id: "1",
    name: "Mercedez Benz C 180 Mt 20 1.6 156cv 4p",
    type: "Sedan",
    photoUrl: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
    price: 120000000,
    transmission: TransmissionCar.AUTOMATIC,
    year: 2020,
    like: false,
    odometer: 6800,
}

@injectable()
class CarRepositoryTest implements CarRepository {
    public async getSomeRandomCars(): Promise<CarEntity[]> {
        return new Promise<CarEntity[]>((resolve, reject) => {
            return resolve([
                _testCar,
                _testCar,
                _testCar,
                _testCar,
                _testCar,
                _testCar,
                _testCar,
                _testCar,
            ])
        });
    }

    public async likeCar(id: string, like: boolean): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            return resolve();
        });
    }
}

export default CarRepositoryTest;