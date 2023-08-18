/********************************************************************************
 * File Header - FrequentQuestionRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the FrequentQuestionRepository.
 * The frequentQuestionRepository are the frequent questions that are shown in the FAQ section and procedures in formalities page.
 ********************************************************************************/

import FrequentQuestionEntity from "../entities/FrequentQuestionEntity";

export default interface FrequentQuestionRepository {
    getAll(): Promise<FrequentQuestionEntity[]>;
    getProcedures(): Promise<FrequentQuestionEntity[]>;
}

export const FrequentQuestionRepositoryName = "FrequentQuestionRepository";