import './QuoteYourCarPageStyles.scss';
import { FC, useState } from "react";
import Layout from "../../../layout/Layout";
import Icons from "../../../assets/Icons";
import { useNavigate } from 'react-router-dom';
import HorizontalSteperComponent from '../../../components/horizontalStepper/HorizontalStepperComponent';
import { useForm } from 'react-hook-form';
import Validators from '../../../../utils/Validators';
import { ErrorMessage } from '@hookform/error-message';

const QuoteYourCarPage: FC<{}> = () => {

    const navigate = useNavigate();
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();

    const [currentStep, setCurrentStep] = useState(0);

    const _handleOnSubmit = (data: any) => {
        if(currentStep == 0) setCurrentStep(1);
    }

    const _handleGoBack = () => navigate(-1);

    return <Layout>
        <form className="quote_your_car_page py-5" onSubmit={handleSubmit(_handleOnSubmit)}>
            <div className="bg_image">
                <Icons.TwoTrapecios />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div onClick={_handleGoBack}>
                            <Icons.BackArrowCircle />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="side side_top mb-0">
                            <h1>
                                Cotiza con
                                <span className="text_italic text_orange"> nosotros</span>
                            </h1>
                            <h5>Llena el siguiente formulario</h5>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <HorizontalSteperComponent currentStep={currentStep} changeStep={setCurrentStep}>
                                    <div className="row">
                                        <div className="col-md-6 my-3">
                                            <div className="form-group">
                                                <label className='mandatory'>Nombre</label>
                                                <input type="text" className="form-control" placeholder='nombre' {...register('contact.name', Validators({
                                                    required: true,
                                                    minLength: 2,
                                                    maxLength: 20,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3">
                                            <div className="form-group">
                                                <label className='mandatory'>Apellido</label>
                                                <input type="text" className="form-control" placeholder='apellido' {...register('contact.lastname', Validators({
                                                    required: true,
                                                    minLength: 2,
                                                    maxLength: 20,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.lastname" />
                                            </div>
                                        </div>
                                        <div className="col-12 my-3">
                                            <div className="form-group">
                                                <label className='optional'>Nombre de  compañía</label>
                                                <input type="text" className="form-control" placeholder='nombre de compañía' {...register('contact.companyName', Validators({
                                                    maxLength: 50,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.companyName" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className='mandatory'>Teléfono</label>
                                                <input type="text" className="form-control" placeholder='número de teléfono' {...register('contact.phone', Validators({
                                                    required: true,
                                                    phone: true,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className='mandatory'>Email</label>
                                                <input type="email" className="form-control" placeholder='ejemplo@gmail.com' {...register('contact.email', Validators({
                                                    required: true,
                                                    email: true,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                    </div>
                                </HorizontalSteperComponent>
                                <div className="d-flex justify-content-md-end mt-3">
                                    <button type="submit" className="btn btn_orange">
                                        {currentStep < 2 ? 'Siguiente' : 'Enviar'}
                                        {currentStep < 2 ? <Icons.ArrowCircle /> : <Icons.CheckRounded />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </form>
    </Layout >
}

export default QuoteYourCarPage;