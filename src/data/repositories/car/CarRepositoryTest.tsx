import { injectable } from "inversify";
import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import CarRepository from "../../../domain/repositories/CarRepository";
import sleeper from "../../../domain/repositories/utils/Sleeper";
import { routes } from "../../../presentation/ui/routes/RoutesComponent";
import OrderByEntity from "../../../domain/entities/OrderByEntity";
import { Either, right } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../domain/entities/ExceptionEntity";

const _testCar: CarEntity = {
    doors: 4,
    motor: '1.6 16v 115cv',
    plate: '8 de Bogota',
    status: 'nuevo',
    id: "1",
    name: "Mercedez Benz C 180 Mt 20 1.6 156cv 4p",
    model: 'Class C',
    discount: 108000000,
    type: {
        id: "1",
        name: "Sedan",
        photo: '/data/typeVehicles/suv.svg',
    },
    tag: {
        id: "1",
        name: "new",
        color: "#00FEFE",
        description: "new",
    },
    rating: 3,
    images: [
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
        "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
        "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
        "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
        "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    description:
        'Version Renault Life' + "\n" +
        'Motor 1.6 16v 115cv' + "\n" +
        'Caja Manual de 5 marchas' + "\n" +
        'Llantas de aleación de 15"' + "\n" +
        'Faros antiniebla delanteros' + "\n" +
        'Computadora de abordo' + "\n" +
        'Limitador y regulador de velocidad' + "\n" +
        'Cierre centralizado de puertas' + "\n" +
        'Levantacristales eléctricos delanteros' + "\n" +
        'Espejos exteriores eléctricos' + "\n" +
        'Volante regulable en altura' + "\n" +
        'Asiento del conductor regulable en altura'
    ,
    photoUrl: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
    price: 120000000,
    priceBook: {
        subtotal: 758000,
        rest: 242000,
        total: 1000000
    },
    transmission: TransmissionCar.AUTOMATIC,
    year: 2020,
    odometer: 6800,
    brand: {
        id: "1",
        name: "Mercedez",
        image: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png"
    },
    color: {
        id: "1",
        name: "gray",
        colorHex: "#00FEFE",
    },
    typeOfFuel: {
        id: "1",
        name: "hibrido"
    }
}

@injectable()
class CarRepositoryTest implements CarRepository {
    search(page: number, search: string, brand: string | undefined,
        year: string | undefined,
        price: { min: number, max: number } | undefined,
        type: string, transmission: TransmissionCar | undefined,
        tag: string | undefined, km: { min: number, max: number } | undefined,
        fuelId: string | undefined, colorId: string | undefined,
        plateNumber: string | undefined, orderBy: OrderByEntity | undefined,
    ): Promise<{ cars: CarEntity[], maxPages: number }> {
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
    public async getRelatedCarsByCardIdUseCase(id: string): Promise<CarEntity[]> {
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
    public async getCarById(id: string): Promise<CarEntity | undefined> {
        return new Promise<CarEntity>((resolve, reject) => {
            return resolve(_testCar);
        });
    }

    public async bookACarPayment(carId: string, paymentInfo: any): Promise<Either<ExceptionEntity, void>> {
        window.location.href = routes.dateForCar.relativePath + '/' + carId + '/' + 'dsdsdssd';
        return right(undefined);
    }

    public async getFavoriteCars(): Promise<CarEntity[]> {
        return new Promise<CarEntity[]>((resolve, reject) => {
            resolve([_testCar, _testCar]);
        });
    }
}

export default CarRepositoryTest;