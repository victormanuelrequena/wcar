import { injectable } from "inversify";
import FrequentQuestionRepository from "../../../domain/repositories/FrequentQuestionRepository";
import FrequentQuestionEntity from "../../../domain/entities/FrequentQuestionEntity";
import GetAllFrequentQuestionsAboutUsApiImpl from "./impl/api/GetAllFrequentQuestionsAboutUsApiImpl";
import GetAllFrequentQuestionsInsuranceApiImpl from "./impl/api/GetAllFrequentQuestionsInsuranceApiImpl";
import GetAllFrequentQuestionsProceduresApiImpl from "./impl/api/GetAllFrequentQuestionsProceduresApiImpl";

@injectable()
class FrequentQuestionRepositoryDev implements FrequentQuestionRepository {
    getAboutUs = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsAboutUsApiImpl();
    getProcedures = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsProceduresApiImpl();
    getInsurances = (): Promise<FrequentQuestionEntity[]> => GetAllFrequentQuestionsInsuranceApiImpl();
}

export default FrequentQuestionRepositoryDev;