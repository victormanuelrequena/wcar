import './ProceduresPageStyles.scss';
import { FC, useEffect, useState } from "react";
import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";
import Layout from "../../../layout/Layout";
import di from "../../../../../di/DependencyInjection";
import GetAllProcedureQuestionsUseCase, { GetAllProcedureQuestionsUseCaseName } from "../../../../../domain/use_cases/frequentQuestion/GetAllProcedureQuestionsUseCase";
import AccordeonComponent from "../../../components/accordeon/AccordeonComponent";
import CardContactComponent from '../../../components/cardContact/CardContactComponent';
import { Helmet } from 'react-helmet-async';


const ProceduresPage: FC<{}> = () => {
    const [procudesQuestions, setProcudesQuestions] = useState<FrequentQuestionEntity[]>([]);

    const _getProceduresQuestions = async () => {
        try {
            const response = await di.get<GetAllProcedureQuestionsUseCase>(GetAllProcedureQuestionsUseCaseName).call();
            setProcudesQuestions(response);
        } catch (error) {
        }
    }

    useEffect(() => {
        _getProceduresQuestions();
    }, []);

    return <div className="procedures_page">
        <Helmet>
            <title>Trámites de vehículos | te ahorramos tiempo y dinero en 2023</title>
            <meta name='description' content='Realizamos todos tus trámites de vehículos al comprar o vender tu auto en Colombia, ahorramos tiempo y dinero en transacciones seguras para tu carro.' />
            <meta name='keywords' content='Trámites de vehículos, trámite de tránsito' />
        </Helmet>

        <Layout>
            <picture className='w-100'>
                <source srcSet="/assets/services/bg_procedures_mobile.jpg" type="image/jpg" media="(max-width: 768px)" className='w-100' />
                <img srcSet="/assets/services/bg_procedures.jpg" alt='Trámites de tránsito en Colombia' title='Trámites de tránsito en Colombia' className='img-fluid w-100' />
            </picture>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="px-3 px-md-5 py-4 py-md-5 bg-white questions_container">
                            <AccordeonComponent
                                title={<h1 className="font_bold h3">Trámites de <span className="text_orange text_italic"> vehículos</span></h1>}
                                subtitle={"Los trámites de tránsito en Colombia son procesos que requieren el cumplimiento de ciertos requisitos, que pueden ser fáciles o difíciles dependiendo del organismo donde se vaya a realizar.  En wcar te facilitamos la vida poniendo tu disposición nuestro personal experto para acompañarte en el proceso que necesites hacer:"}
                                options={procudesQuestions.map((question) => {
                                    return {
                                        title: question.question,
                                        content: question.answer
                                    }
                                }
                                )} />

                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 px-0 px-md-3 pt-5">
                        <p className='mb-5 px-3 px-md-0'>
                            Al igual que con todos nuestros productos, queremos brindarte servicio personalizado, con toma de firmas e improntas a domicilio, además de un precio razonable y agilidad.
                        </p>
                        <CardContactComponent />
                    </div>
                </div>
            </div>
        </Layout>
    </div>
}

export default ProceduresPage;