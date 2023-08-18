/********************************************************************************
 * File Header - InsuranceRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the InsuranceRepository.
 * A insurance is a type of insurance.
 ********************************************************************************/

import InsuranceEntity from "../entities/InsuranceEntity";

export default interface InsuranceRepository {
    getInsurances(): Promise<InsuranceEntity[]>;
}

export const InsuranceRepositoryName = 'InsuranceRepository';