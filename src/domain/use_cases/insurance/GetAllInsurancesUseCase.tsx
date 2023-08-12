import { injectable } from "inversify";
import InsuranceRepository from "../../repositories/InsuranceRepository";
import InsuranceEntity from "../../entities/InsuranceEntity";

interface props {
    insuranceRepository: InsuranceRepository;
}


@injectable()
export default class GetAllInsurancesUseCase {
    _insuranceRepository: InsuranceRepository;
    _insurances: InsuranceEntity[] = [];

    constructor(_: props) {
        this._insuranceRepository = _.insuranceRepository;
    }

    async call(): Promise<InsuranceEntity[]> {
        try {
            if (this._insurances.length > 0) return this._insurances;
            this._insurances = await this._insuranceRepository.getInsurances();
            return this._insurances;
        } catch (error) {
            return [];
        }
    }

}