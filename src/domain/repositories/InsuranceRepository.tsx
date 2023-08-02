import InsuranceEntity from "../entities/InsuranceEntity";

export default interface InsuranceRepository {
    getInsurances(): Promise<InsuranceEntity[]>;
}

export const InsuranceRepositoryName = 'InsuranceRepository';