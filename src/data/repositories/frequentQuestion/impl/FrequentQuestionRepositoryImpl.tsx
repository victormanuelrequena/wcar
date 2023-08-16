import { injectable } from "inversify";
import FrequentQuestionRepository from "../../../../domain/repositories/FrequentQuestionRepository";
import FrequentQuestionEntity from "../../../../domain/entities/FrequentQuestionEntity";
import GetAllFrequentQuestionsApiImpl from "./api/GetAllFrequentQuestionsApiImpl";
import GetAllProceduresApiImpl from "./api/GetAllProceduresApiImpl";

@injectable()
export default class FrequentQuestionRepositoryImpl implements FrequentQuestionRepository{
    getAll = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsApiImpl();
    getProcedures = (): Promise<FrequentQuestionEntity[]> => GetAllProceduresApiImpl();
}