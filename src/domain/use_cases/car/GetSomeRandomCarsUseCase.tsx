import CarEntity from "../../entities/CarEntity";
import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

export default class GetSomeRandomCarsUseCase{
    
    _carRepository: CarRepository;

    constructor(_:props) {
        this._carRepository = _.carRepository;
    }
    async call() : Promise<CarEntity[]>{
        return await this._carRepository.getSomeRandomCars();
    }
}