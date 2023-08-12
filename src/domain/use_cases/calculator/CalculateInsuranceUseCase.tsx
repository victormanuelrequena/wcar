import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../repositories/CalculatorRepository";
import CalculatedEntity from "../../entities/CalculatedEntity";

interface props {
    calculatorRepository: CalculatorRepository;
}

@injectable()
export default class CalculateInsuranceUseCase {
    _calculatorRepository: CalculatorRepository;

    constructor(_: props) {
        this._calculatorRepository = _.calculatorRepository;
    }

    async call(name:string, phone: string, email: string, cityId: string, licensePlate: string): Promise<void> {
        return await this._calculatorRepository.calculateInsurance(name, phone, email, cityId, licensePlate);
    }
}
