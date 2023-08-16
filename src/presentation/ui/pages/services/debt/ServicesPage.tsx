import { useForm } from 'react-hook-form';
import di from '../../../../../di/DependencyInjection';
import InsuranceEntity from '../../../../../domain/entities/InsuranceEntity';
import GetAllInsurancesUseCase from '../../../../../domain/use_cases/insurance/GetAllInsurancesUseCase';
import Icons from '../../../assets/Icons';
import './ServicesPageStyles.scss';
import { FC, useContext, useEffect, useState } from "react";
import CalculateCreditForCarUseCase from '../../../../../domain/use_cases/calculator/CalculateCreditForCarUseCase';
import FrequentQuestionsComponent from '../../../components/frequentQuestions/FrequentQuestionsComponent';
import Layout from '../../../layout/Layout';
import FinancingServicesLineComponent from '../../../components/financingServicesLine/FinancingServicesLineComponent';
import ServicesCalculatorFormComponent from './components/calculator/ServicesCalculatorFormComponent';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import CalculatorTitleComponent from './components/message/CalculatorTitleComponent';
import CurrencyParse from '../../../../utils/CurrencyParse';
import { isRight } from 'fp-ts/lib/Either';

const ServicesPage: FC = () => {

    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const formFunctions = useForm();
    const [estimatedDebt, setEstimatedDebt] = useState<number | undefined>(undefined);
    const [insurances, setInsurances] = useState<InsuranceEntity[]>([]);
    const { getValues } = formFunctions;

    const _getAllInsurances = async () => {
        try {
            const response = await di.get<GetAllInsurancesUseCase>(GetAllInsurancesUseCase.name).call();
            setInsurances(response);
        } catch (error) {

        }
    }

    const _handleSubmit = async (data: any) => {
        const response = await di.get<CalculateCreditForCarUseCase>(CalculateCreditForCarUseCase.name).call(data.vehicleValue, data.initialQuote, data.months, data.insuranceId);
        if (isRight(response)) {
            setEstimatedDebt(response.right);
        } else {
            addToast(response.left.message ?? 'Ha ocurrido un error al calcular el crédito', 'error', undefined);
        }
    }

    const _handleOnFormChange = () => {
        const values = getValues();
        if (values.vehicleValue && values.initialValue && values.months && values.insuranceId) {
            _handleSubmit(values);
        } else {
            setEstimatedDebt(undefined);
        }
    }

    useEffect(() => {
        _getAllInsurances();
    }, []);

    return <div className="services_page">
        <Layout>
            <section className="section_1 position-relative w-100 mb-5">
                <img src="/assets/services/bg_services_financing_pc.jpg" className='img-fluid w-100 d-none d-md-block bg_1' alt="" />
                <div className="container">
                    <div className="col-md-4 position-absolute d-none d-md-block top-50 translate-middle-y">
                        <div className="side side_top side_blue_neon mb-3" />
                        <h1 className="text_md_white text_bold">¿Cómo funciona nuestro proceso<span className="text_md_white text_light text_italic"> de financiación?</span></h1>
                    </div>
                </div>
                <img src="/assets/services/bg_services_financing_mobile.jpg" alt="" className="img-fluid w-100 d-block d-md-none" />
                <div className="container">
                    <div className="col-12 mt-3 d-flex d-md-none align-items-center">
                        <h1 className="text_black text_bold text-center">¿Cómo funciona nuestro proceso de <span className="fw-light text_orange text_italic text-center">financiación?</span></h1>
                    </div>
                </div>
            </section>
            <section className="section_2">
                <FinancingServicesLineComponent />
            </section>
            <section className="section_3 py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="d-md-none col-12">
                            <CalculatorTitleComponent />
                        </div>
                        <div className="col-12 col-md-6 my-3">
                            <ServicesCalculatorFormComponent formFunctions={formFunctions} insuranceList={insurances} handleOnFormChange={_handleOnFormChange} />

                        </div>
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 d-flex flex-column justify-content-center align-items-start">
                            <div className="d-md-block d-none">
                                <CalculatorTitleComponent />
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
                                            <h2 className="text_orange mb-0">{CurrencyParse.toCop(estimatedDebt ?? 0)}</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 line_gray line_gray_horizontal my-3"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="text_light text-center body_text">*Este simulador es de neto uso interactivo y calcula una cuota aproximada la cual tiene fines informativos y no comporta ofertas o promesas de contratar.</p>
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
                        <FrequentQuestionsComponent />
                    </div>
                </div>
            </section>
        </Layout>
    </div >
}

export default ServicesPage;