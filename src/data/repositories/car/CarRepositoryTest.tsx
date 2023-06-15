import { injectable } from "inversify";
import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import CarRepository from "../../../domain/repositories/CarRepository";
import sleeper from "../../../domain/repositories/utils/Sleeper";

const _testCar: CarEntity = {
    id: "1",
    name: "Mercedez Benz C 180 Mt 20 1.6 156cv 4p",
    type: {
        id: "1",
        name: "Sedan"
    },
    photoUrl: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
    price: 120000000,
    transmission: TransmissionCar.AUTOMATIC,
    year: 2020,
    like: false,
    odometer: 6800,
    brand: {
        id: "1",
        name: "Mercedez"
    },
    color: {
        id: "1",
        name: "gray",
    },
    typeOfFuel: {
        id: "1",
        name: "hibrido"
    }
}

@injectable()
class CarRepositoryTest implements CarRepository {
    search(page: number, search?: string | undefined, brand?: string | undefined, year?: string | undefined, price?: number | undefined, type?: string[] | undefined, transmission?: TransmissionCar | undefined, availability?: string | undefined): Promise<{ cars: CarEntity[], maxPages: number }> {
        return new Promise<{ cars: CarEntity[], maxPages: number }>(async (resolve, reject) => {
            //add a delay of 1s
            await sleeper(1000)(1);

            return resolve({
                cars: [
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                    _testCar,
                ], maxPages: 10
            });
        });
    }
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