import { set, useForm } from 'react-hook-form';
import di from '../../../../di/DependencyInjection';
import InsuranceEntity from '../../../../domain/entities/InsuranceEntity';
import GetAllInsurancesUseCase from '../../../../domain/use_cases/insurance/GetAllInsurancesUseCase';
import Icons from '../../assets/Icons';
import CardWithIconComponentProps from '../../components/cardWithIcon/CardWithIconComponentProps';
import './ServicesPageStyles.scss';
import { FC, useEffect, useState } from "react";
import CalculateCreditForCarUseCase from '../../../../domain/use_cases/calculator/CalculateCreditForCarUseCase';
import FrequentQuestionsComponent from '../../components/frequentQuestions/FrequentQuestionsComponent';
import Layout from '../../layout/Layout';
import FinancingServicesLineComponent from '../../components/financingServicesLine/FinancingServicesLineComponent';
const steps: CardWithIconComponentProps[] = [];
const ServicesPage: FC = () => {

    const [estimatedDebt, setEstimatedDebt] = useState<number | undefined>(undefined);
    const [insurances, setInsurances] = useState<InsuranceEntity[]>([]);
    const { register, setValue, handleSubmit, watch, getValues, formState: { errors } } = useForm();

    const _getAllInsurances = async () => {
        try {
            const response = await di.get<GetAllInsurancesUseCase>(GetAllInsurancesUseCase.name).call();
            setInsurances(response);
        } catch (error) {

        }
    }

    const _handleSubmit = async (data: any) => {
        try {
            const response = await di.get<CalculateCreditForCarUseCase>(CalculateCreditForCarUseCase.name).call(data.vehicleValue, data.initialQuote, data.months, data.insuranceId);
            setEstimatedDebt(response);
        } catch (error) {

        }
    }

    const _handleOnFormChange = () => {
        const values = getValues();
        if (values.vehicleValue && values.initialQuote && values.months && values.insuranceId) {
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
            <FinancingServicesLineComponent/>
            <section className="section_3 py-5">
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
            <section className="section_4">
                <div className="container py-5">
                    <FrequentQuestionsComponent />
                </div>
            </section>
        </Layout>
    </div>
}

export default ServicesPage;