import { injectable } from "inversify";
import FrequentQuestionRepository from "../../../../domain/repositories/FrequentQuestionRepository";
import FrequentQuestionEntity from "../../../../domain/entities/FrequentQuestionEntity";
import GetAllFrequentQuestionsAboutUsApiImpl from "./api/GetAllFrequentQuestionsAboutUsApiImpl";
import GetAllFrequentQuestionsInsuranceApiImpl from "./api/GetAllFrequentQuestionsInsuranceApiImpl";
import GetAllFrequentQuestionsProceduresApiImpl from "./api/GetAllFrequentQuestionsProceduresApiImpl";

@injectable()
export default class FrequentQuestionRepositoryImpl implements FrequentQuestionRepository{
    getAboutUs = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsAboutUsApiImpl();
    getProcedures = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsProceduresApiImpl();
    getInsurances = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsInsuranceApiImpl();
}