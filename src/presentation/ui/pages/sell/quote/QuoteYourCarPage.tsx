import './QuoteYourCarPageStyles.scss';
import { FC, useContext, useState } from "react";
import Layout from "../../../layout/Layout";
import Icons from "../../../assets/Icons";
import { Link, useNavigate } from 'react-router-dom';
import HorizontalSteperComponent from '../../../components/horizontalStepper/HorizontalStepperComponent';
import { useForm } from 'react-hook-form';
import Validators from '../../../../utils/Validators';
import { ErrorMessage } from '@hookform/error-message';
import BrandContext from '../../../../../domain/providers/brand/BrandContext';
import BrandContextType from '../../../../../domain/providers/brand/BrandContextType';
import di from '../../../../../di/DependencyInjection';
import GetModelsByBrandUseCase, { GetModelsByBrandUseCaseName } from '../../../../../domain/use_cases/brand/GetModelsByBrandUseCase';
import GetModelVersionByModelAndBrandIdUseCase, { GetModelVersionByModelAndBrandIdUseCaseName } from '../../../../../domain/use_cases/brand/GetModelVersionByModelAndBrandIdUseCase';
import CityContext from '../../../../../domain/providers/city/CityContext';
import CityContextType from '../../../../../domain/providers/city/CityContextType';
import ColorContextType from '../../../../../domain/providers/color/ColorContextType';
import ColorContext from '../../../../../domain/providers/color/ColorContext';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import CalculateOfferForCarUseCase, { CalculateOfferForCarUseCaseName } from '../../../../../domain/use_cases/calculator/CalculateOfferForCarUseCase';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import { routes } from '../../../routes/RoutesComponent';
import { isRight } from 'fp-ts/lib/Either';
import ModelEntity from '../../../../../domain/entities/ModelEntity';
import VersionModelEntity from '../../../../../domain/entities/VersionModelEntity';

const _min_year = 1999;
const QuoteYourCarPage: FC<{}> = () => {

    const navigate = useNavigate();
    const { register, setValue, handleSubmit, getValues, formState: { errors } } = useForm();

    const { brands } = useContext(BrandContext) as BrandContextType;
    const { cities } = useContext(CityContext) as CityContextType;
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const [currentStep, setCurrentStep] = useState(0);
    const [models, setModels] = useState<ModelEntity[]>([]);
    const [versions, setVersions] = useState<VersionModelEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const _handleOnSubmit = (data: any) => {
        if (currentStep == 0) setCurrentStep(1);
        if (currentStep == 1) setCurrentStep(2);
        if (currentStep == 2) _handleSave(data);
    }

    const _handleSave = async (data: any) => {
        setLoading(true);
        const calculated = await di.get<CalculateOfferForCarUseCase>(CalculateOfferForCarUseCaseName).call(data);
        if (isRight(calculated)) {
            addToast("Cotización realizada", "success", undefined);
            navigate(routes.quoteSuccessful.relativePath, { state: { "calculated": calculated.right } });
        } else {
            addToast(calculated.left.message ?? "Error creando cotización", "error", undefined);
            setLoading(false);
        }
    }

    const _handleChangeBrand = async (brandId: string) => {
        setModels([]);
        setVersions([]);
        setValue('car.model', undefined);
        setValue('car.version', undefined);
        try {
            const response = await di.get<GetModelsByBrandUseCase>(GetModelsByBrandUseCaseName).call(brandId);
            setModels(response);
        } catch (error) {
        }
    }

    const _handleChangeModel = async (model: string) => {
        setValue('car.version', undefined);
        setVersions([]);
        const brandId = getValues()?.car?.brand;
        try {
            const response = await di.get<GetModelVersionByModelAndBrandIdUseCase>(GetModelVersionByModelAndBrandIdUseCaseName).call(brandId, model);
            setVersions(response);
        } catch (error) {
        }
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
                        <div className="side side_top mb-0 mt-3 mt-md-0">
                            <h1>
                                Cotiza con
                                <span className="text_italic text_orange"> nosotros</span>
                            </h1>
                            <h5>Llena el siguiente formulario</h5>
                        </div>
                        <div className="card mt-4 p-4 position-relative">
                            {loading && <div className="loading_container">
                                <LoadingComponent />
                            </div>}
                            <div className="card-body">

                                <HorizontalSteperComponent
                                    steps={['Datos personales', 'Datos del carro', 'Enviar formulario']}
                                    currentStep={currentStep} changeStep={setCurrentStep}>
                                    {currentStep == 0 ? <div className="row">
                                        <div className="col-md-6 my-2">
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
                                        <div className="col-md-6 my-2">
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
                                        <div className="col-12 my-2">
                                            <div className="form-group">
                                                <label className='optional'>Nombre de  compañía</label>
                                                <input type="text" className="form-control" placeholder='nombre de compañía' {...register('contact.companyName', Validators({
                                                    maxLength: 50,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.companyName" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>Teléfono</label>
                                                <input type="text" className="form-control" placeholder='número de teléfono' {...register('contact.phone', Validators({
                                                    required: true,
                                                    phone: true,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>Email</label>
                                                <input type="email" className="form-control" placeholder='ejemplo@gmail.com' {...register('contact.email', Validators({
                                                    required: true,
                                                    email: true,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="contact.email" />
                                            </div>
                                        </div>
                                    </div> : <></>}
                                    {currentStep == 1 ? <div className="row">
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>Año</label>
                                                <select className="form-control" {...register('car.year', Validators({
                                                    required: true,
                                                    minValue: _min_year,
                                                    maxValue: (new Date().getFullYear()) + 1,
                                                }))}>
                                                    <option value="">Selecciona un año</option>
                                                    {Array.from(Array((new Date().getFullYear()) - _min_year + 1).keys()).map((year, index) => <option key={index} value={(new Date().getFullYear() + 1 - index)}>{(new Date().getFullYear() + 1 - index)}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.year" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 my-2'>
                                            <div className="form-group">
                                                <label className='mandatory'>Marca</label>
                                                <select className="form-control" {...register('car.brand', Validators({
                                                    onChange: (value: string) => _handleChangeBrand(value),
                                                    required: true,
                                                }))}>
                                                    <option value="">Selecciona una marca</option>
                                                    {brands.map((brand, index) => <option key={index} value={brand.id}>{brand.name}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.brand" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 my-2'>
                                            <div className="form-group">
                                                <label className="mandatory">Modelo</label>
                                                <select className="form-control" {...register('car.model', Validators({
                                                    required: true,
                                                    onChange: (value: string) => _handleChangeModel(value),
                                                }))}>
                                                    <option value="">Selecciona un modelo</option>
                                                    {models.map((model, index) => <option key={index} value={model.id}>{model.name}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.model" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 my-2'>
                                            <div className="form-group">
                                                <label className="mandatory">Versión</label>
                                                <select className="form-control" {...register('car.version', Validators({
                                                    required: true,
                                                }))}>
                                                    <option value="">Selecciona una versión</option>
                                                    {versions.map((version, index) => <option key={index} value={version.id}>{version.name}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.version" />
                                            </div>
                                        </div>
                                    </div> : <></>}
                                    {currentStep == 2 ? <div className="row">
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>Kilometraje</label>
                                                <input type="number" className="form-control" placeholder='km aproximado' {...register('car.kilometers', Validators({
                                                    required: true,
                                                    minValue: 0,
                                                }))} />
                                                <ErrorMessage as="aside" errors={errors} name="car.kilometers" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>¿En qué ciudad está matriculado el carro?</label>
                                                <select className="form-control" {...register('car.city', Validators({
                                                    required: true,
                                                }))}>
                                                    <option value="">seleccionar</option>
                                                    {cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.city" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <div className="form-group">
                                                <label className='mandatory'>Color</label>
                                                <select className="form-control" {...register('car.color', Validators({
                                                    required: true,
                                                }))}>
                                                    <option value="">seleccionar</option>
                                                    {colors.map((color, index) => <option key={index} value={color.id}>{color.name}</option>)}
                                                </select>
                                                <ErrorMessage as="aside" errors={errors} name="car.color" />
                                            </div>
                                        </div>
                                    </div> : <></>}
                                </HorizontalSteperComponent>
                                <div className="d-flex justify-content-md-end mt-3">
                                    <button type="submit" className="btn btn_orange">
                                        {currentStep < 2 ? 'Siguiente' : 'Enviar'}
                                        {currentStep < 2 ? <Icons.ArrowCircle /> : <Icons.CheckRounded />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <span>
                                Al continuar aceptas nuestros <Link className='text_gray' to={"#"}> Términos y Condiciones.</Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </form>
    </Layout >
}

export default QuoteYourCarPage;