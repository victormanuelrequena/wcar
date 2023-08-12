import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../repositories/CalculatorRepository";

interface props {
    calculatorRepository: CalculatorRepository;
}

@injectable()
export default class CalculateCreditForCarUseCase {
    _calculatorRepository: CalculatorRepository;

    constructor(_: props) {
        this._calculatorRepository = _.calculatorRepository;
    }

    async call(vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<number> {
        return await this._calculatorRepository.calculateCredit(vehicleValue, initialQuote, months, insuranceId);
    }
}
