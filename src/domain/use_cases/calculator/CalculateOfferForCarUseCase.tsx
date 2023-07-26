import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../repositories/CalculatorRepository";

interface props {
    calculatorRepository: CalculatorRepository;
}

@injectable()
export default class CalculateOfferForCarUseCase {
    _calculatorRepository: CalculatorRepository;

    constructor(_:props){
        this._calculatorRepository = _.calculatorRepository;
    }

    async call(data: CalculateOfferForCarProps){
        return await this._calculatorRepository.calculateOfferForCar(data);
    }
}
