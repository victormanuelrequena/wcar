import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

export default class LikeCarUseCase{
    
    _carRepository: CarRepository;

    constructor(_:props) {
        this._carRepository = _.carRepository;
    }
    async call(id: string, like: boolean) {
        return await this._carRepository.likeCar(id, like);
    }
}