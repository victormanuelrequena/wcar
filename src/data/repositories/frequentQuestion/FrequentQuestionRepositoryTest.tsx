import { injectable } from "inversify";
import FrequentQuestionRepository from "../../../domain/repositories/FrequentQuestionRepository";
import FrequentQuestion from "../../../domain/entities/FrequentQuestionEntity";

const _test:FrequentQuestion = {
    id: '1',
    question: '¿Cómo recibo una oferta por mi carro? ',
    answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.',
};

@injectable()
class FrequentQuestionRepositoryTest implements FrequentQuestionRepository{
    async getAll(): Promise<FrequentQuestion[]> {
        return [_test, _test, _test, _test, _test, _test, _test, _test,];
    }

    async getProcedures(): Promise<FrequentQuestion[]> {
        return [_test, _test, _test, _test, _test, _test, _test, _test,];
    }
}

export default FrequentQuestionRepositoryTest;