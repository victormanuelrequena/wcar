import { useForm } from "react-hook-form";
import di from "../../../../../di/DependencyInjection";
import Icons from "../../../assets/Icons";
import "./ServicesPageStyles.scss";
import { FC, useContext, useEffect, useRef, useState } from "react";
import CalculateCreditForCarUseCase, {
    CalculateCreditForCarUseCaseName,
} from "../../../../../domain/use_cases/calculator/CalculateCreditForCarUseCase";
import Layout from "../../../layout/Layout";
import FinancingServicesLineComponent from "../../../components/financingServicesLine/FinancingServicesLineComponent";
import ServicesCalculatorFormComponent from "./components/calculator/ServicesCalculatorFormComponent";
import ModalsContext from "../../../../../domain/providers/modal/ModalsContext";
import ModalsContextType from "../../../../../domain/providers/modal/ModalsContextType";
import CalculatorTitleComponent from "./components/message/CalculatorTitleComponent";
import CurrencyParse from "../../../../utils/CurrencyParse";
import { isRight } from "fp-ts/lib/Either";
import AccordeonComponent from "../../../components/accordeon/AccordeonComponent";
import GetAllInsuranceQuestionsUseCase, {
    GetAllInsuranceQuestionsUseCaseName,
} from "../../../../../domain/use_cases/frequentQuestion/GetAllInsuranceQuestionsUseCase";
import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";
import { Helmet } from "react-helmet-async";
import ModalGarantie from "../../car/detailedCar/component/ModalGarantie";

const ServicesPage: FC = () => {
    const { addToast } = useContext(ModalsContext) as ModalsContextType;
    const [showGaratieModal, setShowGarantieModal] = useState(false);

    const formFunctions = useForm();
    const [estimatedDebt, setEstimatedDebt] = useState<number | undefined>(undefined);
    const [layoutWidth, setLayoutWidth] = useState<number>(0);
    const { getValues } = formFunctions;

    const [frequentQuestions, setFrequentQuestions] = useState<FrequentQuestionEntity[]>([]);
    const refContainer = useRef<HTMLDivElement | null>(null);

    const _getFrequentQuestions = async () => {
        try {
            const respose = await di.get<GetAllInsuranceQuestionsUseCase>(GetAllInsuranceQuestionsUseCaseName).call();
            setFrequentQuestions(respose);
        } catch (error) {}
    };

    const _handleSubmit = async (data: any) => {
        const response = await di
            .get<CalculateCreditForCarUseCase>(CalculateCreditForCarUseCaseName)
            .call(data.vehicleValue, data.initialQuote, data.months, data.insurance);
        if (isRight(response)) {
            setEstimatedDebt(response.right);
        } else {
            addToast(response.left.message ?? "Ha ocurrido un error al calcular el crédito", "error", undefined);
        }
    };

    const _handleOnFormChange = () => {
        const values = getValues();
        console.log(values);

        if (values.vehicleValue && values.initialQuote && values.months) {
            // _handleSubmit(values);
            // const valor_total =
            //     (values.vehicleValue * ((1 + 0.1) ** values.months - 1)) / (0.1 * ((1 + 0.1) ** values.months - 1)) +
            //     values.initialQuote * values.months;
            let cuota_mensual =
                ((values.vehicleValue - values.initialQuote) * (1.9 / 100)) / (1 - (1 + 1.9 / 100) ** -values.months);

            setEstimatedDebt(cuota_mensual);
        } else {
            setEstimatedDebt(undefined);
        }
    };

    useEffect(() => {
        setLayoutWidth(refContainer.current?.getBoundingClientRect()?.width ?? 0);
    }, [refContainer.current?.getBoundingClientRect()]);

    useEffect(() => {
        _getFrequentQuestions();
    }, []);

    return (
        <div className="services_page" ref={refContainer}>
            <Helmet>
                <title>Financiación con wcar, ¡estrena tu usado hoy!</title>
                <meta
                    name="description"
                    content="Nada como saber desde el primer momento cuánto debes pagar mensual. Conoce el valor de tu cuota con estos datos, de manera fácil y sencilla."
                />
                <meta
                    name="keywords"
                    content="Financiación, Cómo funciona nuestro proceso de financiación, Calcula tu Préstamo"
                />
            </Helmet>
            <Layout>
                <h1 className="d-none">Financiación</h1>
                <section className="section_1">
                    <img
                        src="/assets/services/bg_services_financing_mobile.jpg"
                        alt="wcar"
                        title="wcar"
                        className="img-fluid w-100 bg_img d-block d-md-none"
                    />
                    <div className="content position-md-absolute">
                        <div className="container">
                            <div className="col-md-4">
                                <div className="side side_top side_blue_neon mb-3" />
                                <h2 className="text_md_white text_bold text-center text-md-start">
                                    ¿Cómo funciona
                                    <br className="d-none d-md-block" /> nuestro proceso{" "}
                                    <br className="d-none d-md-block" />
                                    <span className="text_md_italic text_md_lighter"> de</span>{" "}
                                    <span className="text_md_white text_light text_italic text_orange">
                                        {" "}
                                        financiación?
                                    </span>
                                </h2>
                            </div>
                            <br />
                            <div className="block">
                                <a
                                    target="_blank"
                                    href="https://oneid.com.co/#/public/fill_flow/ce8db55d1f1171202f6dbc70cb98f2be60e76bb111648e76797acdcfbde35410bb63c0be056b822829ae44c2254824073a8026850ec3ddded6960b86d4c0e594369afc1a5083a1105760e86933"
                                    className="px-4 btn btn_orange d-block d-md-inline-block block"
                                >
                                    HAZ AQUÍ TU SOLICITUD DE CRÉDITO
                                </a>
                            </div>
                            <button
                                className="btn btn_cyan my-1 me-3 btn-detailed-car mt-3"
                                onClick={() => setShowGarantieModal(true)}
                            >
                                ADQUIERE TU GARANTIA
                            </button>
                        </div>
                    </div>
                    <img
                        src="/assets/services/bg_services_financing_pc.jpg"
                        className="img-fluid w-100 d-none d-md-block bg_img bg_1"
                        alt="Financiación con wcar"
                        title="Financiación con wcar"
                    />
                </section>
                <section className="section_2">
                    <FinancingServicesLineComponent />
                </section>
                <section className="section_3 py-5 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="d-md-none col-12">{layoutWidth < 768 && <CalculatorTitleComponent />}</div>
                            <div className="col-12 col-md-6 my-3">
                                <ServicesCalculatorFormComponent
                                    formFunctions={formFunctions}
                                    handleOnFormChange={_handleOnFormChange}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex flex-column justify-content-center align-items-start">
                                <div className="d-md-block d-none">
                                    {layoutWidth > 768 && <CalculatorTitleComponent />}
                                </div>
                                <div className="card shadow-sm px-0 px-md-2 px-lg-4 position-relative calculator_card">
                                    <div className="card-body">
                                        <div className="row d-flex align-items-center justify-content-center mt-3">
                                            <div className="col-3 d-flex justify-content-md-end">
                                                <Icons.MoneyHand />
                                            </div>
                                            <div className="col-1">
                                                <div className="line_gray line_gray_vertical" />
                                            </div>
                                            <div className="col-8 d-flex flex-column">
                                                <p className="text_light mb-1">Tu cuota mensual sería de:</p>

                                                <h3 className="text_orange mb-0">
                                                    {CurrencyParse.toCop(Math.round(estimatedDebt ?? 0))}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 line_gray line_gray_horizontal my-3"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="text_light text-center body_text">
                                                    *Este simulador es de neto uso interactivo y calcula una cuota
                                                    aproximada la cual tiene fines informativos y no comporta ofertas o
                                                    promesas de contratar.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_4 position-relative">
                    <img src="/assets/recs/bg_services_lines.png" className="bg_img_line translate-middle-y" />
                    <div className="container py-5">
                        <div className="row">
                            <AccordeonComponent
                                title={
                                    <h2 className="font_bold h1">
                                        Preguntas <span className="text_orange text_italic">frecuentes</span>
                                    </h2>
                                }
                                options={frequentQuestions.map((frequentQuestion) => {
                                    return {
                                        title: frequentQuestion.question,
                                        content: frequentQuestion.answer,
                                    };
                                })}
                            />
                        </div>
                    </div>
                </section>
            </Layout>
            {showGaratieModal && (
                <ModalGarantie
                    id={"185"}
                    close={() => setShowGarantieModal(false)}
                    carValue={100000}
                    SrvCode={"1003"}
                />
            )}
        </div>
    );
};

export default ServicesPage;
