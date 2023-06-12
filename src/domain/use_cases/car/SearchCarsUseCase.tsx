import CarEntity, { TransmissionCar } from "../../entities/CarEntity";
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
    async call(page:number, search?: string, brand?: string | undefined, year?: string | undefined, price?: number | undefined, type?: string[], transmission?: TransmissionCar, availability?: string | undefined) : Promise<Response> {
        return await this._carRepository.search(page, search, brand, year, price, type, transmission, availability);
    }
}