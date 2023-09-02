import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";
import FrequentQuestionImplDto from "../../../../dto/impl/FrequentQuestionImplDto";
import HostApi from "../../../../settings/HostApi";

const _test: FrequentQuestionEntity = {
    id: '1',
    question: '¿Cómo recibo una oferta por mi carro? ',
    answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.',
};

//TODO CREATE API
const GetAllFrequentQuestionsApiImpl = async (): Promise<FrequentQuestionEntity[]> => {
    return [_test, _test, _test, _test, _test, _test, _test, _test,];
    const relativeUrl = "";
    try {
        const resposne = await HostApi.get(relativeUrl);
        return resposne.map((frequentQuestion: any) => FrequentQuestionImplDto.fromJson(frequentQuestion));
    } catch (error) {
        return [];
    }
}

export default GetAllFrequentQuestionsApiImpl;