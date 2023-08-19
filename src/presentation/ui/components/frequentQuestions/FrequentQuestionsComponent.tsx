import { FC, useEffect, useState } from "react";
import FrequentQuestionEntity from "../../../../domain/entities/FrequentQuestionEntity";
import di from "../../../../di/DependencyInjection";
import GetAllFrequentQuestionsUseCase, { GetAllFrequentQuestionsUseCaseName } from "../../../../domain/use_cases/frequentQuestion/GetAllFrequentQuestionsUseCase";
import AccordeonComponent from "../accordeon/AccordeonComponent";

const FrequentQuestionsComponent: FC<{}> = () => {
    const [frequentQuestions, setFrequentQuestions] = useState<FrequentQuestionEntity[]>([]);

    const _getFrequentQuestions = async () => {
        try {
            const respose = await di.get<GetAllFrequentQuestionsUseCase>(GetAllFrequentQuestionsUseCaseName).call();
            setFrequentQuestions(respose);
        } catch (error) {

        }
    }

    useEffect(() => {
        _getFrequentQuestions();
    }, []);

    if (frequentQuestions.length <= 0) return <></>

    return <AccordeonComponent
        title={<h3 className="font_bold">Preguntas <span className="text_orange text_italic">frecuentes</span></h3>}
        subtitle={"Los trámites de tránsito en Colombia son procesos que requieren el cumplimiento de ciertos requisitos, que pueden ser fáciles o difíciles dependiendo del organismo donde se vaya a realizar.  En wcar te facilitamos la vida poniendo tu disposición nuestro personal experto para acompañarte en el proceso que necesites hacer:"}
        options={frequentQuestions.map((frequentQuestion) => {
            return {
                title: frequentQuestion.question,
                content: frequentQuestion.answer
            }
        }
        )} />
}

export default FrequentQuestionsComponent;
