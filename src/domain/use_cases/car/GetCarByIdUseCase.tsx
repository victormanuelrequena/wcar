import CarEntity from "../../entities/CarEntity";
import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

export default class GetCarByIdUseCase {

    _carRepository: CarRepository;

    constructor(_: props) {
        this._carRepository = _.carRepository;
    }
    async call(id: string): Promise<CarEntity> {
        return await this._carRepository.getCarById(id);
    }
}