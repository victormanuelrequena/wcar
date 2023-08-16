import { injectable } from "inversify";
import InsuranceEntity from "../../../../domain/entities/InsuranceEntity";
import InsuranceRepository from "../../../../domain/repositories/InsuranceRepository";
import GetAllInsurancesApiImpl from "./api/GetAllInsurancesApiImpl";

@injectable()
export default class InsuranceRepositoryImpl implements InsuranceRepository{
    getInsurances = (): Promise<InsuranceEntity[]> => GetAllInsurancesApiImpl();
}