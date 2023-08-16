import ExceptionEntity from "../../entities/ExceptionEntity";
import CarRepository from "../../repositories/CarRepository";
import { Either } from "fp-ts/lib/Either";

interface props { carRepository: CarRepository }

export default class BookACarWithPaymentUseCase{
    
    _carRepository: CarRepository;

    constructor(_:props) {
        this._carRepository = _.carRepository;
    }
    async call(carId: string, paymentInfo: any):Promise<Either<ExceptionEntity, void>> {
        return await this._carRepository.bookACarPayment(carId, paymentInfo);
    }
}