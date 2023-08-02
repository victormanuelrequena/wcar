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
            <section className="section_1">Aqui va el banner con texto</section>
            <section className="section_2">Slider con cards</section>
            <section className="section_3">Calculadora</section>
            <section className="section_4">
                <div className="container py-5">
                    <FrequentQuestionsComponent />
                </div>
            </section>
        </Layout>
    </div>
}

export default ServicesPage;