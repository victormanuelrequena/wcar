import { injectable } from "inversify";
import FrequentQuestionRepository from "../../repositories/FrequentQuestionRepository";
import FrequentQuestionEntity from "../../entities/FrequentQuestionEntity";

interface props {
    frequentQuestionRepository: FrequentQuestionRepository;
}

@injectable()
export default class GetAllInsuranceQuestionsUseCase {
    _frequentQuestionRepository: FrequentQuestionRepository;

    constructor(_: props) {
        this._frequentQuestionRepository = _.frequentQuestionRepository;
    }

    async call(): Promise<FrequentQuestionEntity[]>{
        return this._frequentQuestionRepository.getInsurances();
    }

}

export const GetAllInsuranceQuestionsUseCaseName = "GetAllInsuranceQuestionsUseCaseName";