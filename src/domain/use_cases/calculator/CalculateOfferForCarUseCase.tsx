import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../repositories/CalculatorRepository";
import CalculatedEntity from "../../entities/CalculatedEntity";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { Either } from "fp-ts/lib/Either";

interface props {
    calculatorRepository: CalculatorRepository;
}

@injectable()
export default class CalculateOfferForCarUseCase {
    _calculatorRepository: CalculatorRepository;

    constructor(_: props) {
        this._calculatorRepository = _.calculatorRepository;
    }

    async call(data: CalculateOfferForCarProps): Promise<Either<ExceptionEntity, CalculatedEntity>> {
        return await this._calculatorRepository.calculateOfferForCar(data);
    }
}

export const CalculateOfferForCarUseCaseName = "CalculateOfferForCarUseCaseName";