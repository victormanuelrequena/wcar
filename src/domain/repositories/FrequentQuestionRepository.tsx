import FrequentQuestionEntity from "../entities/FrequentQuestionEntity";

export default interface FrequentQuestionRepository {
    getAll(): Promise<FrequentQuestionEntity[]>;
    getProcedures(): Promise<FrequentQuestionEntity[]>;
}

export const FrequentQuestionRepositoryName = "FrequentQuestionRepository";