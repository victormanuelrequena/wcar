import { FC } from "react"
import { Link } from "react-router-dom"
import { SLOGAN } from "../../../utils/Contants";
import { routes } from "../../routes/RoutesComponent";

const FooterComponent: FC<{}> = () => {
    return (
        <footer className="footer pt-5 bg_white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-6 mb-4 mb-md-0">
                        <img className="mb-3" src="/assets/logos/horizontal.svg" alt="Wcar" title="Wcar" /><br />
                        <span>{SLOGAN}</span>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Menú</h6>
                            <Link to={routes.aboutUs.relativePath} className="my-1">Nuestra Empresa</Link>
                            <Link to={routes.buyYourCar.relativePath} className="my-1">Compra tu carro</Link>
                            <Link to={routes.sellYourCar.relativePath} className="my-1">Vende tu carro</Link>
                            <Link to={routes.services.relativePath} className="my-1">Financiación</Link>
                            <Link to={routes.insurance.relativePath} className="my-1">Seguros</Link>
                            <Link to={routes.procedures.relativePath} className="my-1">Trámites</Link>
                            <a href="https://autospremium.wcar.co/">Términos y condiciones de esta campaña</a>
                            {/* <Link to={routes.blog.relativePath} className="my-1">Blog</Link> */}
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Contacto</h6>
                            <a href="tel:+573244001212" className="my-1">+57 324 4001212</a>
                            <a href="mailto:contacto@wcar.co" className="my-1">contacto@wcar.co</a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Calle+98a+%23+69B-35" target="_blank">Calle 98a # 69B-35</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex flex-column-reverse flex-md-row pt-3 pb-md-5">
                    <div className="col-md-4 d-flex flex-column aling-items-center footer_sic align-items-md-start text_gray py-3 pb-md-0">
                        <img src="/assets/logos/industria_y_comercio.png" alt="Wcar" title="Wcar" className="img_fluid mb-3 px-5 px-md-0" />
                        <div className="text-center text-md-start">
                            <span className="text_wcar">wcar</span> -
                            <span> Todos los derechos reservados © 2023</span>
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
    )
}

export default FooterComponent;