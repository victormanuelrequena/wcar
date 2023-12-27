import { FC } from "react";
import Layout from "../../layout/Layout";

const PrivacyPoliciesForMobileApp: FC<{}> = () => {
    return (
        <Layout>
            <div
                className="w-100 px-3 p_spaced"
                style={{ backgroundImage: "url(/assets/pages/contact/bg_contact.jpg)", backgroundSize: "contain" }}
            >
                <div className="container">
                    <div className="bg-white p-5">
                        <div className="side side_top mb-3">
                            <h2>Políticas de privacidad para la aplicación móvil wcar</h2>
                        </div>
                        <div className="side mb-3">
                            <h4>Introducción</h4>
                        </div>
                        <p>
                            Estas políticas de privacidad ("Políticas") describen cómo recopilamos, utilizamos y
                            divulgamos la información personal que recopilamos de los usuarios de nuestra aplicación
                            wcar ("Aplicación").
                        </p>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Información que recopilamos</h4>
                        </div>
                        <p>Recopilamos información sobre nuestros usuarios de las siguientes maneras:</p>
                        <ul>
                            <li>
                                Información que nos proporciona directamente: Recopilamos información personal que nos
                                proporciona directamente, como su nombre, dirección de correo electrónico, número de
                                teléfono, dirección de facturación y dirección de entrega. Recopilamos esta información
                                cuando se registra para utilizar la Aplicación, cuando realiza una compra a través de la
                                Aplicación o cuando se pone en contacto con nosotros con una pregunta o solicitud.
                            </li>
                            <li>
                                Información que recopilamos automáticamente: También recopilamos información
                                automáticamente cuando utiliza la Aplicación, como su dirección IP, información de
                                dispositivo, información de uso de la Aplicación y datos de ubicación. Recopilamos esta
                                información para proporcionarle los servicios de la Aplicación, para mejorar la
                                experiencia del usuario y para fines de marketing.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Uso de la información</h4>
                        </div>
                        <p>Utilizamos la información personal que recopilamos de las siguientes maneras:</p>
                        <ul>
                            <li>
                                Para proporcionarle los servicios de la Aplicación: Utilizamos la información personal
                                que recopilamos para proporcionarle los servicios de la Aplicación, como para crear su
                                cuenta, procesar sus compras, enviarle notificaciones y responder a sus preguntas.
                            </li>
                            <li>
                                Para mejorar la experiencia del usuario: Utilizamos la información personal que
                                recopilamos para mejorar la experiencia del usuario de la Aplicación, como para
                                personalizar el contenido y los anuncios que ve.
                            </li>
                            <li>
                                Para fines de marketing: Utilizamos la información personal que recopilamos para fines
                                de marketing, como para enviarle correos electrónicos promocionales y anuncios
                                personalizados.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Divulgación de la información</h4>
                        </div>
                        <p>Podemos divulgar su información personal a terceros en las siguientes circunstancias:</p>
                        <ul>
                            <li>
                                A proveedores de servicios: Podemos compartir su información personal con proveedores de
                                servicios que nos ayudan a proporcionar los servicios de la Aplicación, como empresas de
                                procesamiento de pagos y empresas de análisis de datos.
                            </li>
                            <li>
                                A empresas afiliadas: Podemos compartir su información personal con nuestras empresas
                                afiliadas, que pueden utilizarla para los mismos fines que nosotros.
                            </li>
                            <li>
                                A terceros conforme a la ley: Podemos divulgar su información personal a terceros
                                conforme a la ley, como en respuesta a una citación o una orden judicial.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Controles de privacidad</h4>
                        </div>
                        <p>
                            Puede controlar la información personal que recopilamos y utilizamos de las siguientes
                            maneras:
                        </p>
                        <ul>
                            <li>
                                Configuración de la cuenta: Puede actualizar su información de cuenta y sus preferencias
                                de privacidad en cualquier momento en la configuración de su cuenta.
                            </li>
                            <li>
                                Cookies: Puede controlar las cookies que utilizamos en su dispositivo mediante la
                                configuración de su navegador.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Seguridad de la información</h4>
                        </div>
                        <p>
                            Implementamos medidas de seguridad para proteger su información personal contra el acceso no
                            autorizado, la divulgación, la alteración o la destrucción. Estas medidas incluyen:
                        </p>
                        <ul>
                            <li>
                                Seguridad física: Protegemos nuestros servidores físicos con medidas de seguridad
                                físicas, como controles de acceso y cámaras de seguridad.
                            </li>
                            <li>
                                Seguridad de la red: Utilizamos firewalls y otros controles de seguridad de la red para
                                proteger nuestra red contra ataques.
                            </li>
                            <li>
                                Seguridad de los datos: Utilizamos encriptación y otras medidas de seguridad de los
                                datos para proteger su información personal almacenada en nuestros sistemas.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Cambios en las políticas de privacidad</h4>
                        </div>
                        <p>
                            Podemos modificar estas Políticas de privacidad en cualquier momento. Si realizamos algún
                            cambio importante, le notificaremos por correo electrónico o mediante un aviso en la
                            Aplicación.
                        </p>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Cómo contactarnos</h4>
                        </div>
                        <p>
                            Si tiene alguna pregunta sobre estas Políticas de privacidad, puede ponerse en contacto con
                            nosotros en: servicioalcliente @wcar.co o al número celular +57 324 4001212
                        </p>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Consentimiento</h4>
                        </div>
                        <p>Al utilizar la Aplicación, usted acepta estas Políticas de privacidad.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPoliciesForMobileApp;
