import { injectable } from "inversify";
import FrequentQuestionRepository from "../../repositories/FrequentQuestionRepository";

interface props {
    frequentQuestionRepository: FrequentQuestionRepository;
}

@injectable()
export default class GetAllFrequentQuestionsUseCase {
    _frequentQuestionRepository: FrequentQuestionRepository;

    constructor(_: props) {
        this._frequentQuestionRepository = _.frequentQuestionRepository;
    }

    async call(){
        return this._frequentQuestionRepository.getAll();
    }

}