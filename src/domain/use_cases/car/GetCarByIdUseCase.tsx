import { injectable } from "inversify";
import CarEntity from "../../entities/CarEntity";
import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

@injectable()
export default class GetCarByIdUseCase {

    _carRepository: CarRepository;

    constructor(_: props) {
        this._carRepository = _.carRepository;
    }
    async call(id: string): Promise<CarEntity | undefined> {
        return await this._carRepository.getCarById(id);
    }
}

export const GetCarByIdUseCaseName = "GetCarByIdUseCaseName";