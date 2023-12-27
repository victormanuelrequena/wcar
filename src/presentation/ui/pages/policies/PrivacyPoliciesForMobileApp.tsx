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
                            <h2>Políticas de privacidad para la aplicación móvil WCAR</h2>
                        </div>
                        <div className="side mb-3">
                            <h4>Introducción</h4>
                        </div>
                        <p>
                            WCAR SAS se compromete a proteger la privacidad de sus usuarios. Esta Política de privacidad
                            describe la información que recopilamos sobre nuestros usuarios, cómo la usamos y cómo la
                            protegemos.
                        </p>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Información que recopilamos</h4>
                        </div>
                        <p>Recopilamos información sobre nuestros usuarios de las siguientes maneras:</p>
                        <ul>
                            <li>
                                Información que usted nos proporciona: Cuando se registra para usar WCAR, nos
                                proporciona cierta información personal, como su nombre, dirección de correo electrónico
                                y número de teléfono. También podemos recopilar información personal adicional de usted,
                                como su dirección de facturación y de envío, si nos la proporciona.
                            </li>
                            <li>
                                Información que recopilamos automáticamente: Cuando utiliza WCAR, también recopilamos
                                cierta información automáticamente, como su dirección IP, el tipo de navegador que
                                utiliza, el sistema operativo que utiliza y la página web que lo remitió a WCAR.
                            </li>
                            <li>
                                Información de terceros: Podemos recopilar información de terceros, como información de
                                sus redes sociales o de otras fuentes de datos públicas.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Cómo usamos la información</h4>
                        </div>
                        <p>Usamos la información que recopilamos para los siguientes fines:</p>
                        <ul>
                            <li>
                                Para proporcionarle nuestros servicios: Usamos su información para proporcionarle los
                                servicios que ha solicitado, como la entrega de productos o servicios, la resolución de
                                problemas o la asistencia al cliente.
                            </li>
                            <li>
                                Para mejorar nuestros servicios: Usamos su información para mejorar nuestros servicios,
                                como comprender mejor sus necesidades y preferencias, y para desarrollar nuevos
                                productos y servicios.
                            </li>
                            <li>
                                Para fines de marketing: Usamos su información para enviarle información sobre nuestros
                                productos, servicios y ofertas especiales.
                            </li>
                            <li>
                                Para cumplir con la ley: Usamos su información para cumplir con nuestras obligaciones
                                legales, como responder a solicitudes de información de las autoridades gubernamentales.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Cómo protegemos su información</h4>
                        </div>
                        <p>
                            Tomamos medidas de seguridad para proteger su información, como el cifrado de datos, el
                            acceso restringido a la información y el monitoreo de la seguridad de nuestros sistemas.
                            Cómo compartir su información
                        </p>
                        <p>Podemos compartir su información con terceros en las siguientes circunstancias:</p>
                        <ul>
                            <li>
                                Con proveedores de servicios: Podemos compartir su información con nuestros proveedores
                                de servicios, que nos ayudan a proporcionar nuestros servicios, como el procesamiento de
                                pagos o el envío de productos.
                            </li>
                            <li>
                                Con terceros autorizados: Podemos compartir su información con terceros autorizados,
                                como las autoridades gubernamentales, cuando sea necesario para cumplir con la ley o
                                para proteger nuestros derechos.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Sus derechos</h4>
                        </div>
                        <p>
                            Usted tiene derecho a acceder, actualizar y corregir su información personal. También tiene
                            derecho a revocar su consentimiento para que usemos su información. Para ejercer estos
                            derechos, puede ponerse en contacto con nosotros en servicioalcliente @wcar.co o al número
                            celular +57 324 4001212
                        </p>
                        <p>
                            Cambios en esta Política de privacidad Podemos cambiar esta Política de privacidad en
                            cualquier momento. Cualquier cambio será efectivo una vez sea publicado en esta página web.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPoliciesForMobileApp;
