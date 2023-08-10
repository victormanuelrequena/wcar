import './InsurancePageStyles.scss';
import { useForm } from 'react-hook-form';
import di from '../../../../../di/DependencyInjection';
import CityContext from '../../../../../domain/providers/city/CityContext';
import CityContextType from '../../../../../domain/providers/city/CityContextType';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import AlliesLineComponent from '../../../components/alliesLine/AlliesLineComponent';
import Layout from '../../../layout/Layout';
import { FC, useContext } from "react";
import Validators from '../../../../utils/Validators';
import { ErrorMessage } from '@hookform/error-message';
import Icons from '../../../assets/Icons';
import { routes } from '../../../routes/RoutesComponent';
import { Link } from 'react-router-dom';
import CalculateInsuranceUseCase from '../../../../../domain/use_cases/calculator/CalculateInsuranceUseCase';

const InsurancePage: FC<{}> = () => {

    const { cities } = useContext(CityContext) as CityContextType;
    const { addToast } = useContext(ModalsContext) as ModalsContextType;
    const { register, setValue, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const _handleSubmit = async (data: any) => {
        try {
            const response = await di.get<CalculateInsuranceUseCase>(CalculateInsuranceUseCase.name).call(data.name, data.phone, data.email, data.cityId, data.vehicle_plates);
            addToast('Su cotización ha sido enviada, pronto nos pondremos en contacto con usted', 'success', null);
            reset();
        } catch (error) {
            addToast('Ha ocurrido un error, por favor intente de nuevo', 'error', null);
        }
    }

    return <div className="insurance_page">
        <Layout>
            <section className="section_1  bg_black">
                <div className="position-relative">
                    <div className="sized_infinited c3 d-none d-md-block bg_1">
                        <img src="/assets/services/bg_insurance.jpg" alt="" />
                    </div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-end">
                                <img src="" alt="" className="img-fluid d-md-none" />
                            </div>
                            <div className="col-md-7">
                                <div className="px-md-5 mx-md-4">
                                    <div className="text-white">
                                        <div className="left_line left_line_blue_neon">Seguros</div>
                                        <h1 className='my-3'><span className="text_bold">¿Qué es un seguro todo riesgo en </span>Colombia?</h1>
                                        <p>Es una cobertura para los daños por accidentes de tránsito, el hurto del carro, los daños ocasionados a bienes de terceros y la muerte o lesiones ocasionados a terceros.</p>
                                        <p>Coberturas principales:</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Responsabilidad civil.</li>
                                                    <li>Perdidas parciales.</li>
                                                    <li>Perdidas totales.</li>
                                                    <li>Daños propios del vehículo.</li>
                                                    <li>Seguro para el conductor.</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Robo del vehículo.</li>
                                                    <li>Eventos de la naturaleza.</li>
                                                    <li>Asesoría Jurídica.</li>
                                                    <li>Gastos de movilización.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={routes.contact.relativePath} className="btn btn_cyan">
                                        CONTACTA UN ASESOR
                                        <Icons.Contact />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-2 d-none d-md-flex justify-content-end"><img src="" alt="" className="img-fluid" /></div>
                        </div>
                        <img src="/assets/services/insurance_rec_01.svg" alt="" className="img-fluid rec_1" />
                        <img src="/assets/services/insurance_rec_02.png" alt="" className="img-fluid rec_2" />
                    </div>
                </div>
                <img src="/assets/services/bg_insurance_mobile.jpg" alt="" className="img-fluid d-md-none w-100" />

            </section>
            <section className="section_2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit(_handleSubmit)}>
                                <div className="side side_top">
                                    <h2 className="text_bold">¿Necesitas seguro <span className="text_italic text_orange">del automóvil?</span></h2>
                                </div>
                                <p>Diligencia el formulario y permítenos asesorarte para que vivas la experiencia wcar con tu seguro del automóvil.</p>
                                <div className="card">
                                    <div className="card-body px-md-5">
                                        <div className="form-group my-3">
                                            <label className='mandatory'>Nombres y apellido</label>
                                            <input type="text" placeholder='nombre' className="form-control" {...register('name', Validators({
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name='name' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label className='mandatory'>Teléfono</label>
                                            <input type="text" placeholder='número de teléfono' className="form-control" {...register('phone', Validators({
                                                required: true,
                                                phone: true,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name='phone' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label className='mandatory'>Email</label>
                                            <input type="text" placeholder='ejemplo@gmail.com' className="form-control" {...register('email', Validators({
                                                required: true,
                                                email: true,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name='email' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label className='mandatory'>Ciudad</label>
                                            <select className="form-control" {...register('cityId', Validators({
                                                required: true,
                                            }))}>
                                                <option value="">Seleccione una ciudad</option>
                                                {cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                                            </select>
                                            <ErrorMessage as="aside" errors={errors} name='cityId' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label className='mandatory'>Placas del vehículo</label>
                                            <input type="text" placeholder='placas del vehículo' className="form-control" {...register('vehicle_plates', Validators({
                                                required: true,
                                                maxLength: 8,
                                                minLength: 4,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name='vehicle_plates' />
                                        </div>
                                        <button type='submit' className='btn btn_orange'>Enviar <Icons.CheckRounded /> </button>
                                    </div>
                                </div>
                                <div className="form-check my-3">
                                    <input className="form-check-input" type="checkbox" {...register("terms", { required: true })} />
                                    <label className="form-check-label text_gray">
                                        Acepto que Wcar almacene y procese la información personal enviada anteriormente para proporcionarle el contenido solicitado.
                                    </label>
                                    <ErrorMessage as="aside" errors={errors} name='terms' />
                                </div>
                                <div className="form-check my-3">
                                    <input className="form-check-input" type="checkbox" {...register("contact_by_whatsapp", { required: true })} />
                                    <label className="form-check-label text_gray">
                                        Acepto que un asesor de wcar me contacte por WhatsApp.
                                    </label>
                                    <ErrorMessage as="aside" errors={errors} name='contact_by_whatsapp' />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section >
            <section className="section_3">
                <AlliesLineComponent />
            </section>
        </Layout >
    </div >
}

export default InsurancePage;