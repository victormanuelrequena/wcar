import './ContactPageStyles.scss';
import { FC, useContext } from "react";
import Layout from "../../layout/Layout";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Validators from '../../../utils/Validators';
import Icons from '../../assets/Icons';
import di from '../../../../di/DependencyInjection';
import ModalsContext from '../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../domain/providers/modal/ModalsContextType';
import { routes } from '../../routes/RoutesComponent';
import ContactByCRMUseCase, { ContactByCRMUseCaseName } from '../../../../domain/use_cases/contact/ContactByCRMUseCase';
import { Helmet } from 'react-helmet-async';

const ContactPage: FC<{}> = () => {
    const { register, setValue, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const _handleSubmit = async (data: any) => {
        try {
            await di.get<ContactByCRMUseCase>(ContactByCRMUseCaseName).call(data);
            addToast('Mensaje enviado', 'success', undefined);
            reset();
        } catch (error) {
            console.log('error on contact', error);
            addToast('Error al enviar el mensaje', 'error', undefined);
        }

    }

    return <div className="contact_page">
        <Helmet>
            <title>Contacto - wcar</title>
            <meta name='description' content='Por favor, completa nuestro formulario de contacto y nos pondremos en contacto contigo lo antes posible. ¡Tu opinión es importante para nosotros y estamos' />
        </Helmet>
        <Layout >
            <div className="w-100" style={{ backgroundImage: 'url(/assets/pages/contact/bg_contact.jpg)', backgroundSize: 'contain' }}>
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
                                <input type="hidden" value="00DHs000000QMEB" {...register("oid")} />
                                <input type="hidden" value={routes.contact.relativePath} {...register('retURL')} />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Nombre</label>
                                            <input type="text" placeholder='nombre' className="form-control" {...register("first_name", Validators({
                                                required: true,
                                                maxLength: 40,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="first_name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Apellido</label>
                                            <input type="text" placeholder='apellido' className="form-control" {...register("last_name", Validators({
                                                required: true,
                                                maxLength: 80,
                                                minLength: 3
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="last_name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='mandatory'>Teléfono</label>
                                            <input type="text" placeholder='número de teléfono' className="form-control" {...register("phone", Validators({
                                                required: true,
                                                maxLength: 40,
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
                                                maxLength: 80,
                                                minLength: 3,
                                                email: true
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Ciudad</label>
                                            <select className="form-control" {...register("00NHs00000G976q", Validators({
                                                //required: true,
                                            }))}>
                                                <option value="">Seleccione una ciudad</option>
                                                <option value="Puerto Nariño">Puerto Nariño</option>
                                                <option value="El Encanto">El Encanto</option>
                                                <option value="Medellín">Medellín</option>
                                                <option value="Bello">Bello</option>
                                                <option value="Itagüí">Itagüí</option>
                                                <option value="Envigado">Envigado</option>
                                                <option value="Rionegro">Rionegro</option>
                                                <option value="Arauca">Arauca</option>
                                                <option value="Tame">Tame</option>
                                                <option value="Saravena">Saravena</option>
                                                <option value="Barranquilla">Barranquilla</option>
                                                <option value="Soledad">Soledad</option>
                                                <option value="Malambo">Malambo</option>
                                                <option value="Bogotá">Bogotá</option>
                                                <option value="Cartagena">Cartagena</option>
                                                <option value="Magangué">Magangué</option>
                                                <option value="Turbaco">Turbaco</option>
                                                <option value="Tunja">Tunja</option>
                                                <option value="Sogamoso">Sogamoso</option>
                                                <option value="Duitama">Duitama</option>
                                                <option value="Manizales">Manizales</option>
                                                <option value="La Dorada">La Dorada</option>
                                                <option value="Chinchiná">Chinchiná</option>
                                                <option value="Florencia">Florencia</option>
                                                <option value="Belén de los Andaquies">Belén de los Andaquies</option>
                                                <option value="San Vicente del Caguán">San Vicente del Caguán</option>
                                                <option value="Yopal">Yopal</option>
                                                <option value="Aguazul">Aguazul</option>
                                                <option value="Paz de Ariporo">Paz de Ariporo</option>
                                                <option value="Popayán">Popayán</option>
                                                <option value="Santander de Quilichao">Santander de Quilichao</option>
                                                <option value="Puerto Tejada">Puerto Tejada</option>
                                                <option value="Valledupar">Valledupar</option>
                                                <option value="Aguachica">Aguachica</option>
                                                <option value="Bosconia">Bosconia</option>
                                                <option value="Quibdó">Quibdó</option>
                                                <option value="Istmina">Istmina</option>
                                                <option value="Tadó">Tadó</option>
                                                <option value="Montería">Montería</option>
                                                <option value="Sahagún">Sahagún</option>
                                                <option value="Cereté">Cereté</option>
                                                <option value="Soacha">Soacha</option>
                                                <option value="Chía">Chía</option>
                                                <option value="Zipaquirá">Zipaquirá</option>
                                                <option value="Facatativá">Facatativá</option>
                                                <option value="Fusagasugá">Fusagasugá</option>
                                                <option value="Inírida">Inírida</option>
                                                <option value="Morichal">Morichal</option>
                                                <option value="Mapiripana">Mapiripana</option>
                                                <option value="San José del Guaviare">San José del Guaviare</option>
                                                <option value="Calamar">Calamar</option>
                                                <option value="El Retorno">El Retorno</option>
                                                <option value="Neiva">Neiva</option>
                                                <option value="Pitalito">Pitalito</option>
                                                <option value="Garzón">Garzón</option>
                                                <option value="Riohacha">Riohacha</option>
                                                <option value="Maicao">Maicao</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Santa Marta">Santa Marta</option>
                                                <option value="Ciénaga">Ciénaga</option>
                                                <option value="Fundación">Fundación</option>
                                                <option value="Villavicencio">Villavicencio</option>
                                                <option value="Granada">Granada</option>
                                                <option value="Acacías">Acacías</option>
                                                <option value="Pasto">Pasto</option>
                                                <option value="Tumaco">Tumaco</option>
                                                <option value="Ipiales">Ipiales</option>
                                                <option value="Cúcuta">Cúcuta</option>
                                                <option value="Ocaña">Ocaña</option>
                                                <option value="Villa del Rosario">Villa del Rosario</option>
                                                <option value="Mocoa">Mocoa</option>
                                                <option value="Puerto Asís">Puerto Asís</option>
                                                <option value="Puerto Guzmán">Puerto Guzmán</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Quimbaya">Quimbaya</option>
                                                <option value="Pereira">Pereira</option>
                                                <option value="Dosquebradas">Dosquebradas</option>
                                                <option value="Santa Rosa de Cabal">Santa Rosa de Cabal</option>
                                                <option value="San Andrés">San Andrés</option>
                                                <option value="Providencia">Providencia</option>
                                                <option value="Bucaramanga">Bucaramanga</option>
                                                <option value="Floridablanca">Floridablanca</option>
                                                <option value="Girón">Girón</option>
                                                <option value="Sincelejo">Sincelejo</option>
                                                <option value="Corozal">Corozal</option>
                                                <option value="Sampués">Sampués</option>
                                                <option value="Ibagué">Ibagué</option>
                                                <option value="Espinal">Espinal</option>
                                                <option value="Melgar">Melgar</option>
                                                <option value="Cali">Cali</option>
                                                <option value="Buenaventura">Buenaventura</option>
                                                <option value="Palmira">Palmira</option>
                                                <option value="Jamundí">Jamundí</option>
                                                <option value="Tuluá">Tuluá</option>
                                                <option value="Mitú">Mitú</option>
                                                <option value="Carurú">Carurú</option>
                                                <option value="Papunaua">Papunaua</option>
                                                <option value="Puerto Carreño">Puerto Carreño</option>
                                                <option value="Santa Rosalía">Santa Rosalía</option>
                                                <option value="Cumaribo">Cumaribo</option>
                                                <option value="Montenegro">Montenegro</option>
                                            </select>
                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G976q" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Línea de negocio</label>
                                            <select className="form-control" {...register("00NHs00000G8pgO", Validators({
                                                //required: true,
                                            }))}>
                                                <option value="">Seleccione una línea de negocio</option>
                                                <option value="Cliente interesado en vender un vehículo">Cliente interesado en vender un vehículo</option>
                                                <option value="Adquisición de seguro">Adquisición de seguro</option>
                                            </select>
                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G8pgO" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Año</label>
                                            <select className="form-control" {...register("00NHs00000G97uJ", Validators({
                                                //required: true,
                                            }))}>
                                                <option value="">Seleccione un año</option>
                                                {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, index) => 2000 + index).map(
                                                    (year, index) => <option key={index} value={year}>{year}</option>)}
                                            </select>
                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G97uJ" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Marca</label>
                                            <select className="form-control" {...register("00NHs00000G97uO", Validators({
                                                //required: true,
                                            }))}>
                                                <option value="">Seleccione una marca</option>
                                                <option value="Audi">Audi</option>
                                                <option value="Bajaj">Bajaj</option>
                                                <option value="BMW">BMW</option>
                                                <option value="BYD">BYD</option>
                                                <option value="Changan">Changan</option>
                                                <option value="Chevrolet">Chevrolet</option>
                                                <option value="CITROEN">CITROEN</option>
                                                <option value="Citroën">Citroën</option>
                                                <option value="CUPRA">CUPRA</option>
                                                <option value="DFSK">DFSK</option>
                                                <option value="Dodge">Dodge</option>
                                                <option value="DS">DS</option>
                                                <option value="Fiat">Fiat</option>
                                                <option value="Ford">Ford</option>
                                                <option value="Foton">Foton</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Hyundai">Hyundai</option>
                                                <option value="JAC">JAC</option>
                                                <option value="Jaguar">Jaguar</option>
                                                <option value="Jeep">Jeep</option>
                                                <option value="KIA">KIA</option>
                                                <option value="Land Rover">Land Rover</option>
                                                <option value="Lexus">Lexus</option>
                                                <option value="Mahindra">Mahindra</option>
                                                <option value="Maserati">Maserati</option>
                                                <option value="Mazda">Mazda</option>
                                                <option value="Mercedes Benz">Mercedes Benz</option>
                                                <option value="MG">MG</option>
                                                <option value="Mini">Mini</option>
                                                <option value="Mitsubishi">Mitsubishi</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Opel">Opel</option>
                                                <option value="Peugeot">Peugeot</option>
                                                <option value="Porsche">Porsche</option>
                                                <option value="Renault">Renault</option>
                                                <option value="Seat">Seat</option>
                                                <option value="Skoda">Skoda</option>
                                                <option value="Smart">Smart</option>
                                                <option value="Ssanyong">Ssanyong</option>
                                                <option value="Subaru">Subaru</option>
                                                <option value="Susuki">Susuki</option>
                                                <option value="SUZUKI">SUZUKI</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Volkswagen">Volkswagen</option>
                                                <option value="Volvo">Volvo</option>
                                            </select>
                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G97uO" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Referencia</label>
                                            <input type="text" placeholder='referencia' className="form-control" {...register("00NHs00000G97uT", Validators({
                                                //required: true,
                                                maxLength: 255,
                                            }))} />

                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G97uT" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className='optional'>Versión</label>
                                            <input type="text" placeholder='versión' className="form-control" {...register("00NHs00000G97uY", Validators({
                                                //required: true,
                                                maxLength: 255,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="00NHs00000G97uY" />
                                        </div>
                                    </div>

                                    {/* <div className="col-12">
                                        <div className="form-group mb-3">
                                            <textarea placeholder='mensaje' className="form-control" {...register("message", Validators({
                                                maxLength: 255,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="message" />
                                        </div>
                                    </div> */}
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
                    <img src="/assets/pages/contact/bg_contact.jpg" alt="Wcar" title="Wcar" className="img_fluid d-md-none w-100" />
                </div>
            </div>
        </Layout >
    </div >;
}

export default ContactPage;