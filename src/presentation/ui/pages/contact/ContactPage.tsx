import './ContactPageStyles.scss';
import { FC, useContext } from "react";
import Layout from "../../layout/Layout";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Validators from '../../../utils/Validators';
import Icons from '../../assets/Icons';
import di from '../../../../di/DependencyInjection';
import ContactUseCase from '../../../../domain/use_cases/contact/ContactUseCase';
import ModalsContext from '../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../domain/providers/modal/ModalsContextType';

const ContactPage: FC<{}> = () => {
    const { register, setValue, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const _handleSubmit = async (data: any) => {
        try {
            await di.get<ContactUseCase>(ContactUseCase.name).call(data.name, data.lastname, data.phone, data.email, data.message);
            addToast('Mensaje enviado', 'success', undefined);
            reset();
        } catch (error) {
            addToast('Error al enviar el mensaje', 'error', undefined);
        }

    }

    return <div className="contact_page">
        <Layout >
            <div className="w-100" style={{ backgroundImage: 'url(/assets/pages/contact/bg_contact.jpg)' }}>
                <div className="container px-0 px-md-5">
                    <div className="px-md-5">
                        <div className="bg_black text_white py-5  px-4 px-md-5">
                            <div className="row d-flex flex-column align-items-center">
                                <div className="col-md-8">
                                    <h2 className="text-center">
                                        ¿Necesitas ayuda?<br />¡Contáctanos!</h2>
                                </div>
                                <div className="col-md-8">
                                    <p className="text-center">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8 px-5 px-md-3 d-flex justify-content-around">
                                    <a href="mailto:contacto@wcar.co">
                                        <div className="card_contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
                                                <circle cx="32" cy="31.5" r="31" fill="#00FEFE" stroke="#00FEFE" />
                                                <path d="M41.496 23H23.504C22.9495 23 22.5 23.3755 22.5 23.8387V37.1613C22.5 37.6245 22.9495 38 23.504 38H41.496C42.0505 38 42.5 37.6245 42.5 37.1613V23.8387C42.5 23.3755 42.0505 23 41.496 23Z" stroke="#1E1E1E" strokeWidth="2" />
                                                <path d="M22.5 23L32.9247 30L42.5 23.2294" stroke="#1E1E1E" strokeWidth="2" />
                                            </svg>
                                            <span>contacto@wcar.co</span>
                                        </div>
                                    </a>
                                    <a href="tel:573244001212">
                                        <div className="card_contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
                                                <circle cx="32" cy="31.5" r="31" fill="#00FEFE" stroke="#00FEFE" />
                                                <path d="M24.4741 22.1408C24.3394 22.1449 24.2071 22.1743 24.0848 22.2272C23.9625 22.28 23.8528 22.3554 23.7622 22.4487C23.6715 22.542 23.6018 22.6514 23.5571 22.7704C23.5124 22.8894 23.4936 23.0156 23.5019 23.1416C23.6364 25.3015 24.2704 30.5716 27.3059 33.8583C30.9409 37.8181 35.6748 39.1824 40.5317 38.9808C40.792 38.9662 41.0368 38.8596 41.2165 38.6826C41.3962 38.5055 41.4975 38.2712 41.5 38.0268V34.5674C41.497 34.2446 41.3783 33.9322 41.163 33.6802C40.9476 33.4282 40.6482 33.2513 40.3127 33.1779L37.8804 32.6739C37.5796 32.6138 37.2664 32.6397 36.9815 32.7481C36.6965 32.8566 36.4528 33.0427 36.2819 33.2823L35.744 34.0454C35.6946 34.1153 35.6208 34.1668 35.5352 34.1911C35.4496 34.2154 35.3577 34.211 35.2752 34.1786C34.0379 33.6783 29.1081 31.5184 28.5663 27.8753C28.5557 27.805 28.5675 27.7333 28.6003 27.6692C28.6332 27.6051 28.6855 27.5516 28.7507 27.5154L29.7267 26.9574C29.9944 26.802 30.2047 26.5732 30.3291 26.3022C30.4535 26.0311 30.486 25.7308 30.4222 25.4419L29.8881 23.1236C29.81 22.7988 29.6142 22.5093 29.3339 22.3045C29.0537 22.0998 28.7064 21.9923 28.3511 22.0004L24.4741 22.1408Z" stroke="#1E1E1E" strokeWidth="2" />
                                            </svg>
                                            <span>+57 324 4001212</span>
                                        </div>
                                    </a>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Calle+98a+%23+69B-35">
                                        <div className="card_contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="63" viewBox="0 0 64 63" fill="none">
                                                <circle cx="32" cy="31.5" r="31" fill="#00FEFE" stroke="#00FEFE" />
                                                <path d="M32.5 42C38.5751 42 43.5 37.0751 43.5 31C43.5 24.9249 38.5751 20 32.5 20C26.4249 20 21.5 24.9249 21.5 31C21.5 37.0751 26.4249 42 32.5 42Z" stroke="#1E1E1E" strokeWidth="2" />
                                                <path d="M32.5 22V31.2058L37.5 35" stroke="#1E1E1E" strokeWidth="2" />
                                            </svg>
                                            <span>Calle 98a # 69B-35</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(_handleSubmit)} >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Nombre</label>
                                            <input type="text" placeholder='nombre' className="form-control" {...register("name", Validators({
                                                required: true,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Apellido</label>
                                            <input type="text" placeholder='apellido' className="form-control" {...register("lastname", Validators({
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="lastname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Teléfono</label>
                                            <input type="text" placeholder='número de teléfono' className="form-control" {...register("phone", Validators({
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                                phone: true
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Email</label>
                                            <input type="email" placeholder='nombre' className="form-control" {...register("ejemplo@gmail.com", Validators({
                                                required: true,
                                                maxLength: 50,
                                                minLength: 3,
                                                email: true
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mb-3">
                                            <textarea placeholder='mensaje' className="form-control" {...register("message", Validators({
                                                maxLength: 255,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="message" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn btn_orange">
                                        Enviar
                                        <Icons.ArrowCircle />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src="/assets/pages/contact/bg_contact.jpg" alt="" className="img_fluid d-md-none w-100" />
                </div>
            </div>
        </Layout >
    </div >;
}

export default ContactPage;