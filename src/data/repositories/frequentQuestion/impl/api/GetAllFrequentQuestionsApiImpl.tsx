import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";
import FrequentQuestionImplDto from "../../../../dto/impl/FrequentQuestionImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllFrequentQuestionsApiImpl = async (): Promise<FrequentQuestionEntity[]> => {
    const relativeUrl = "";
    try {
        const resposne = await HostApi.get(relativeUrl);
        return resposne.map((frequentQuestion: any) => FrequentQuestionImplDto.fromJson(frequentQuestion));
    } catch (error) {
        return [];
    }
}

export default GetAllFrequentQuestionsApiImpl;