import FrequentQuestion from "../entities/FrequentQuestionEntity";

export default interface FrequentQuestionRepository {
    getAll(): Promise<FrequentQuestion[]>;
}

export const FrequentQuestionRepositoryName = "FrequentQuestionRepository";