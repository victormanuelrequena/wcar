import { injectable } from "inversify";
import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import CarRepository from "../../../domain/repositories/CarRepository";
import sleeper from "../../../domain/repositories/utils/Sleeper";
import { routes } from "../../../presentation/ui/routes/RoutesComponent";

const _testCar: CarEntity = {
    id: "1",
    name: "Mercedez Benz C 180 Mt 20 1.6 156cv 4p",
    model: 'Class C',
    type: {
        id: "1",
        name: "Sedan",
        photo: '/data/typeVehicles/suv.svg',
    },
    tag: {
        id: "1",
        name: "new",
        color: "#00FEFE"
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
    description: [
        'Version Renault Life',
        'Motor 1.6 16v 115cv',
        'Caja Manual de 5 marchas',
        'Llantas de aleación de 15"',
        'Faros antiniebla delanteros',
        'Computadora de abordo',
        'Limitador y regulador de velocidad',
        'Cierre centralizado de puertas',
        'Levantacristales eléctricos delanteros',
        'Espejos exteriores eléctricos',
        'Volante regulable en altura',
        'Asiento del conductor regulable en altura',
    ],
    photoUrl: "https://cdn.pixabay.com/photo/2013/07/13/11/26/porsche-158149_960_720.png",
    price: 120000000,
    priceBook: {
        subtotal: 758000,
        rest: 242000,
        total: 1000000
    },
    transmission: TransmissionCar.AUTOMATIC,
    year: 2020,
    like: false,
    odometer: 6800,
    outstanding: true,
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
    public async getCarById(id: string): Promise<CarEntity> {
        return new Promise<CarEntity>((resolve, reject) => {
            return resolve(_testCar);
        });
    }

    public async bookACarPayment(carId: string, paymentInfo: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            window.location.href = routes.dateForCar.relativePath + '/' + carId + '/' + 'dsdsdssd';
            return resolve();
        });
    }

    public async getFavoriteCars(): Promise<CarEntity[]> {
        return new Promise<CarEntity[]>((resolve, reject) => {
            resolve([_testCar, _testCar]);
        });
    }
}

export default CarRepositoryTest;