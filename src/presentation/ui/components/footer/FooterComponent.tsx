import { FC } from "react"
import { Link } from "react-router-dom"
import { SLOGAN } from "../../../utils/Contants";

const FooterComponent: FC<{}> = () => {
    return (
        <footer className="footer py-5 bg_gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-6 mb-4 mb-md-0">
                        <img className="mb-3" src="./assets/logos/horizontal.svg" alt="" /><br />
                        <span>{SLOGAN}</span>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Menú</h6>
                            <Link to="#" className="my-1">Nuestra Empresa</Link>
                            <Link to="#" className="my-1">Compra tu carro</Link>
                            <Link to="#" className="my-1">Vende tu carro</Link>
                            <Link to="#" className="my-1">Servicios</Link>
                            <Link to="#" className="my-1"></Link>
                            <Link to="#" className="my-1">Blog</Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <div className="d-flex flex-column w-100">
                            <h6 className="text_orange text_bold mb-3">Menú</h6>
                            <a href="tel:+573244001212" className="my-1">+57 324 4001212</a>
                            <a href="mailto:contacto@wcar.co" className="my-1">contacto@wcar.co</a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Calle+98a+%23+69B-35" target="_blank">Calle 98a # 69B-35</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row mb-3">
                    <div className="col-md-5">
                        <img src="./assets/logos/industria_y_comercio.png" alt="" className="img_fluid" />
                    </div>
                </div>
                <div className="row d-flex flex-column-reverse flex-md-row my-3 my-md-0">
                    <div className="col-md-5 bg_white bg_md_gray text_gray">
                        <div>
                            <span className="text_wcar">wcar</span> -
                            <span> Todos los derechos reservados © 2023</span>
                        </div>
                    </div>
                    <div className="col-md-7 my-3 my-md-0">
                        <div className="row text_underline text_gray">
                            <div className="col-md-4">
                                <Link to="#">Políticas y tratamiento de datos</Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="#">Términos y condiciones comprador</Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="#">Términos y condiciones vendedor</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;