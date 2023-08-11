import CarEntity, { TransmissionCar } from "../../entities/CarEntity";
import OrderByEntity from "../../entities/OrderByEntity";
import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }
interface Response {
    cars: CarEntity[],
    maxPages: number,
}

export default class SearchCarsUseCase {

    _carRepository: CarRepository;

    constructor(_: props) {
        this._carRepository = _.carRepository;
    }
    async call(page: number, search: string, brand: string | undefined,
        year: string | undefined,
        price: { min: number, max: number } | undefined,
        type: string, transmission: TransmissionCar | undefined,
        tag: string | undefined, km: { min: number, max: number } | undefined,
        fuelId: string | undefined, colorId: string| undefined,
        plateNumber: string | undefined, orderBy: OrderByEntity | undefined,
        ): Promise<Response> {
        return await this._carRepository.search(page, search, brand, year, price, type, transmission, tag, km, fuelId, colorId, plateNumber, orderBy);
    }
}