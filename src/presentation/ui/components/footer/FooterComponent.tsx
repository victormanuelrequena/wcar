import { FC } from "react";
import { Link } from "react-router-dom";
import { SLOGAN } from "../../../utils/Contants";
import { routes } from "../../routes/RoutesComponent";
import { BiLogoInstagram, BiLogoYoutube, BiLogoFacebookCircle, BiLogoLinkedin } from "react-icons/bi";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Map, Marker as MarkerP } from "pigeon-maps";

const FooterComponent: FC<{}> = () => {
    const mapContainerStyle = {
        width: "98%",
        height: "180px",
    };

    const location1 = {
        lat: 4.692129381386467,
        lng: -74.07610437567183,
    };
    const location2 = {
        lat: 4.9019198382935745,
        lng: -74.03035805172732,
    };
    const location3 = {
        lat: 4.6337959,
        lng: -74.1306854,
    };
    const center = {
        lat: (location1.lat + location2.lat) / 2,
        lng: (location1.lng + location2.lng) / 2,
    };

    return (
        <footer className="footer pt-5 bg_white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-6 mb-4 mb-md-0">
                        <img className="mb-3" src="/assets/logos/horizontal.svg" alt="Wcar" title="Wcar" />
                        <br />
                        <span className="d-block">{SLOGAN}</span>
                        <br />
                        <LoadScript googleMapsApiKey="AIzaSyD8q92si456MOmd_nZIQnL_EcvPteWc2K8">
                            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={9}>
                                <Marker position={location1} />
                                <Marker position={location2} />
                                <Marker position={location3} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Menú</h6>
                            <Link to={routes.aboutUs.relativePath} className="my-1">
                                Nuestra Empresa
                            </Link>
                            <Link to={routes.buyYourCar.relativePath} className="my-1">
                                Compra tu carro
                            </Link>
                            <Link to={routes.sellYourCar.relativePath} className="my-1">
                                Vende tu carro
                            </Link>
                            <Link to={routes.services.relativePath} className="my-1">
                                Financiación
                            </Link>
                            <Link to={routes.insurance.relativePath} className="my-1">
                                Seguros
                            </Link>
                            <Link to={routes.procedures.relativePath} className="my-1">
                                Trámites
                            </Link>

                            <Link to={routes.termAndConditionsUser.relativePath} className="my-1">
                                Términos y condiciones usuarios
                            </Link>
                            <Link to={routes.termAndConditionsSalesYesOrYes.relativePath} className="my-1">
                                Términos y Condiciones "Vende tu Carro Si o Si"
                            </Link>
                            <Link to={routes.termAndConditionsNewUsed6MonthWarrany.relativePath} className="my-1">
                                Términos y Condiciones Campaña "Tu nuevo Usado en wcar con garantía de 6 meses"
                            </Link>

                            {/* <Link to={routes.blog.relativePath} className="my-1">Blog</Link> */}
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Contacto</h6>

                            <a href="mailto:contacto@wcar.co" className="my-1">
                                contacto@wcar.co
                            </a>
                            <a
                                className="mt-1 font-weight-bold text_bold"
                                href="https://maps.app.goo.gl/HDat5NSBR9Ap2PyD8"
                                target="_blank"
                            >
                                Wcar Morato
                            </a>
                            <p>
                                Calle 98a # 69B-35
                                <br />
                                +57 324 4001212
                            </p>
                            <a
                                className="mb-0 mt-2 font-weight-bold text_bold"
                                href="https://maps.app.goo.gl/8NmdBefUDhEUd8Ud7"
                                target="_blank"
                            >
                                Wcar Sabana.
                            </a>
                            <p>
                                Carrera 5 #9 - 26 sur, Cajicá, Cundinamarca Torre 3, Local 3. Sabana Park Health &
                                Business
                            </p>
                            <a
                                className="mt-2 font-weight-bold text_bold"
                                href="https://maps.app.goo.gl/DuoSfrxDbLMzExZq5"
                                target="_blank"
                            >
                                Wcar Taller.
                            </a>
                            <p>Cra 69b #98-28</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Siguenos</h6>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <BiLogoFacebookCircle fontSize={20} />
                                <a href="https://www.facebook.com/wcarcolombia?mibextid=ZbWKwL" className="my-2 mx-1">
                                    Facebook
                                </a>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <BiLogoInstagram fontSize={20} />
                                <a
                                    href="https://www.instagram.com/wcar.oficial?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                                    className="my-2 mx-1"
                                >
                                    Instagram
                                </a>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <BiLogoYoutube fontSize={20} />
                                <a
                                    href="https://youtube.com/@wcarcolombia?si=SAfvApSkimvFnxHK"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="my-2 mx-1"
                                >
                                    Youtube
                                </a>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <BiLogoLinkedin fontSize={20} />
                                <a
                                    href="https://www.linkedin.com/company/wcarcol/mycompany/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="my-2 mx-1"
                                >
                                    <span className="mt-3">Linkedin</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex flex-column-reverse flex-md-row pt-3 pb-md-5">
                    <div className="col-md-4 d-flex flex-column aling-items-center footer_sic align-items-md-start text_gray py-3 pb-md-0">
                        <img
                            src="/assets/logos/industria_y_comercio.png"
                            alt="Wcar"
                            title="Wcar"
                            className="img_fluid mb-3 px-5 px-md-0"
                        />
                        <div className="text-center text-md-start">
                            <span className="text_wcar">wcar</span> -<span> Todos los derechos reservados © 2023</span>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex pb-5 pb-md-0">
                        <div className="w-100 text_underline text_gray d-flex flex-column flex-md-row align-items-center align-items-md-end">
                            <div className="mx-3 mt-3 mt-md-0">
                                <Link to={routes.generalPolicies.relativePath}>Políticas y tratamiento de datos</Link>
                            </div>

                            <div className="mx-3 mt-3 mt-md-0">
                                <Link to={routes.buyerPolicies.relativePath}>Términos y condiciones comprador</Link>
                            </div>
                            <div className="mx-3 mt-3 mt-md-0">
                                <Link to={routes.sellerPolicies.relativePath}>Términos y condiciones vendedor</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
