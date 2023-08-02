import CarRepository from "../../repositories/CarRepository";

interface props { carRepository: CarRepository }

export default class BookACarWithPaymentUseCase{
    
    _carRepository: CarRepository;

    constructor(_:props) {
        this._carRepository = _.carRepository;
    }
    async call(carId: string, paymentInfo: any):Promise<void> {
        return await this._carRepository.bookACarPayment(carId, paymentInfo);
    }
}