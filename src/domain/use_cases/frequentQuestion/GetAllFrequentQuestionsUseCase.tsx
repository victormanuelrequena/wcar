import { injectable } from "inversify";
import FrequentQuestionRepository from "../../repositories/FrequentQuestionRepository";
import FrequentQuestionEntity from "../../entities/FrequentQuestionEntity";

interface props {
    frequentQuestionRepository: FrequentQuestionRepository;
}

@injectable()
export default class GetAllFrequentQuestionsUseCase {
    _frequentQuestionRepository: FrequentQuestionRepository;

    constructor(_: props) {
        this._frequentQuestionRepository = _.frequentQuestionRepository;
    }

    async call(): Promise<FrequentQuestionEntity[]>{
        return this._frequentQuestionRepository.getAll();
    }

}

export const GetAllFrequentQuestionsUseCaseName = "GetAllFrequentQuestionsUseCaseName";