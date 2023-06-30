import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

export default class GetCarByIdUseCase{
    
    _carRepository: CarRepository;

    constructor(_:props) {
        this._carRepository = _.carRepository;
    }
    async call(id: string) {
        return await this._carRepository.getCarById(id);
    }
}