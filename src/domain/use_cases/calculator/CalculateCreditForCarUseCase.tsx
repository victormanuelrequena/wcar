import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../repositories/CalculatorRepository";
import { Either } from "fp-ts/lib/Either";
import ExceptionEntity from "../../entities/ExceptionEntity";

interface props {
    calculatorRepository: CalculatorRepository;
}

@injectable()
export default class CalculateCreditForCarUseCase {
    _calculatorRepository: CalculatorRepository;

    constructor(_: props) {
        this._calculatorRepository = _.calculatorRepository;
    }

    async call(vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<Either<ExceptionEntity, number>> {
        return await this._calculatorRepository.calculateCredit(vehicleValue, initialQuote, months, insuranceId);
    }
}

export const CalculateCreditForCarUseCaseName = "CalculateCreditForCarUseCaseName";