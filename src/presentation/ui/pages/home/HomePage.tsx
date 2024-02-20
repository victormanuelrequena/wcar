import "./HomeStyles.scss";
import { FC, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import CardServiceComponent from "./components/cardService/CardServiceComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import CarEntity from "../../../../domain/entities/CarEntity";
import di from "../../../../di/DependencyInjection";
import GetSomeRandomCarsUseCase, {
    GetSomeRandomCarsUseCaseName,
} from "../../../../domain/use_cases/car/GetSomeRandomCarsUseCase";
import CarCardComponent from "../../components/carCard/CarCardComponent";
import Layout from "../../layout/Layout";
import Icons from "../../assets/Icons";
import AlliesLineComponent from "../../components/alliesLine/AlliesLineComponent";
import { routes } from "../../routes/RoutesComponent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Carousel1 } from "../../components/carousel/carousel";
import { Financing } from "../../components/financing/financing";

const HomePage: FC<{}> = () => {
    const [carsInfo, setCarsInfo] = useState([]);
    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);

    useEffect(() => {
        fetch(`https://api.wcaronline.com/api/cars/carousel`)
            .then((res) => res.json())
            .then((res) => setCarsInfo(res))
            .catch((e) => console.error(e));
    }, []);

    const _getSomeCars = async () => {
        try {
            const response = await di.get<GetSomeRandomCarsUseCase>(GetSomeRandomCarsUseCaseName).call();
            setCars(response);
        } catch (error) {
            setCars([]);
        }
    };

    useEffect(() => {
        _getSomeCars();
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>wcar #1 Más que vender te aconsejamos</title>
                <meta
                    name="description"
                    content="WCAR - tu mejor opción para comprar y vender carros usados! Conocemos el mercado y te asesoramos para que encuentres el auto perfecto. ¡Contáctanos ahora!"
                />
            </Helmet>
            <div className="home_page">
                <section className="first_section position-relative d-md-block d-flex flex-column-reverse">
                    <div className="position-sm-absolute w-100 d-flex justify-content-center img_car_01_container">
                        <img
                            src="/assets/home/car_01.png"
                            alt="Comprar con wcar"
                            title="Comprar con wcar"
                            className="img_car_01"
                        />
                    </div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="d-flex flex-column">
                                    <h1 className="side side_top h5">wcar</h1>
                                    <h2 className="mt-3 h1 text_black">
                                        Más que <br />
                                        vender te <br />
                                        <span className="my-3 text_orange text_italic title_orange">aconsejamos</span>
                                    </h2>
                                    <Link to={routes.buyYourCar.relativePath}>
                                        <button className="my-3 btn btn_orange btn_shadow btn_cut">
                                            COMPRA TU CARRO <Icons.ArrowCircle />
                                        </button>
                                    </Link>
                                    <Link to={routes.sellYourCar.relativePath} className="mb-5">
                                        <button className="my-3 btn btn_orange_outline btn_shadow">
                                            VENDE TU CARRO <Icons.ArrowCircle />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second_section mt-3 car_02 from_left_3 container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 d-flex d-md-block justify-content-center">
                                <div className="side side_top side_blue_neon text_black text_md_white">
                                    <h2 className="text_wcar d-flex flex-md-column flex-row">
                                        <strong className="me-2 me-md-0">¿Por qué</strong>
                                        <i>wcar?</i>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <SliderComponent>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4 my-3">
                                                <CardServiceComponent
                                                    title="Transparencia brutal. No omitimos ningún detalle."
                                                    image="/assets/icons/car.svg"
                                                    description="Te contamos las cosas importantes del carro tal y como son."
                                                />
                                            </div>
                                            <div className="col-md-4 my-3">
                                                <CardServiceComponent
                                                    title="Garantía por seis meses.*"
                                                    image="/assets/icons/star.svg"
                                                    description="Puedes extenderla hasta 2 años si lo deseas."
                                                />
                                            </div>
                                            <div className="col-md-4 my-3">
                                                <CardServiceComponent
                                                    title="Peritaje online disponible."
                                                    image="/assets/icons/computer.svg"
                                                    description="Publicamos nuestros peritajes  para que puedas comprar el carro con información completa."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4 my-3">
                                                <CardServiceComponent
                                                    title="Precio realmente razonable."
                                                    image="/assets/icons/money.svg"
                                                    description="No especulamos. A través de nuestro algoritmo calculamos precios de venta reales de mercado. Puedes comprar tu."
                                                />
                                            </div>
                                            <div className="col-md-4 my-3">
                                                <CardServiceComponent
                                                    title="Tecnología para brindar servicio personalizado."
                                                    image="/assets/icons/person.svg"
                                                    description="La tecnología es para nosotros un camino para mejorar el servicio, no para reemplazar las interacciones."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SliderComponent>
                            </div>
                            <div className="col-12 mb-5"></div>
                        </div>
                    </div>
                </section>
                <section className="third_section mt-3 container">
                    <img
                        src="./assets/recs/lines_box.png"
                        className="d-none d-md-block"
                        title="wcar"
                        alt="wcar"
                        style={{ position: "absolute", right: 0, bottom: 0 }}
                    />
                    <div className="container">
                        <div className="row d-flex flex-column-reverse flex-md-row">
                            <div className="px-0 px-md-3 col-md-4 position-relative">
                                <div className="img_section">
                                    <img
                                        src="./assets/home/car_03.png"
                                        title="wcar"
                                        alt="wcar"
                                        className="object_cover"
                                    />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <Financing bgColor="#00fefe" textColor="#000" />
                                <div className="col-md-12 position-relative text-white px-5 ps-md-5 px-md-3 py-5 ms-4">
                                    <img
                                        src="./assets/recs/lines_zigs.png"
                                        alt="wcar"
                                        title="wcar"
                                        style={{ position: "absolute", right: "5vw", top: "2vw" }}
                                    />
                                    <img
                                        src="./assets/recs/lines_box.png"
                                        className="d-block d-md-none"
                                        alt="wcar"
                                        title="wcar"
                                        style={{ position: "absolute", right: 0, bottom: 0 }}
                                    />
                                    <div className="d-flex align-items-center pb-1">
                                        <div
                                            className="me-2"
                                            style={{
                                                width: "48px",
                                                height: "1px",
                                                background: "#00FEFE",
                                            }}
                                        ></div>
                                        <div>Nosotros</div>
                                    </div>
                                    <h3 className="h3 pb-2">
                                        <b>Razones para comprar</b> <br />
                                        <i>y vender con wcar</i>
                                    </h3>
                                    <div className="w-75">
                                        <p>¡Somos el anti-dealer para que compres y vendas con cero estrés! </p>
                                        <br />
                                        <p>
                                            En este revolucionario ecosistema encuentras una consejería personalizada.
                                            Somos brutalmente transparentes, dando a conocer el estado real del vehículo
                                            y ofreciendo precios razonables con un alto estándar de calidad.
                                        </p>
                                    </div>
                                    <br />
                                    <div className="d-flex flex-column flex-md-row">
                                        <a
                                            href={routes.buyYourCar.relativePath}
                                            className="btn btn_in_black_orange btn_cut btn_shadow me-3 my-2 w_fit_content"
                                        >
                                            COMPRA TU CARRO <Icons.ArrowCircle />
                                        </a>
                                        <a href={routes.sellYourCar.relativePath} className="btn btn_black my-2 ">
                                            VENDE TU CARRO <Icons.ArrowCircle />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quater_section container pb-5">
                    <div className="d-flex justify-content-center ms-5 py-5">
                        <div className="col-sm-0 col-md-4"></div>
                        <div className="side side_top col-sm-12 col-md-8">
                            <h2 className="sub_title text_black">
                                Compras online con <i className="text_orange">atención personalizada.</i>
                            </h2>
                        </div>
                    </div>
                    <div className="carousel_info col-12">
                        <SliderComponent>
                            <div>
                                <div className="row">
                                    <div className="col-md-3 my-3">
                                        <CardServiceComponent
                                            title="Compras tu auto online."
                                            image="/assets/icons/Compras.png"
                                            description="Puedes reservarlo o pagarlo totalmente a través de nuestra plataforma. url icono."
                                        />
                                    </div>
                                    <div className="col-md-3 my-3">
                                        <CardServiceComponent
                                            title="Financiación en unos cuantos clicks."
                                            image="/assets/icons/Financiacion.png"
                                            description="Aplica para un crédito en minutos desde nuestra web."
                                        />
                                    </div>
                                    <div className="col-md-3 my-3">
                                        <CardServiceComponent
                                            title="Tecnología para acercar las personas a las personas."
                                            image="/assets/icons/Tecnologia.png"
                                            description="obtén atención personalizada a través de WCAR para resolver cualquier duda."
                                        />
                                    </div>
                                    <div className="col-md-3 my-3">
                                        <CardServiceComponent
                                            title="Enviamos tu auto a tu casa."
                                            image="/assets/icons/Enviamos.png"
                                            description="compra a través de nuestra plataforma y enviamos el auto a la comodidad de tu hogar."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </SliderComponent>
                    </div>
                </section>
                <div style={{ width: "100%", backgroundColor: "#F6F7F9" }}>
                    <section className="fifth_section container py-5">
                        <div className="sub_title mb-4 col-12">
                            <h2>
                                Vehículos <i>en venta</i>
                            </h2>
                        </div>

                        <div
                            className="container w-100 d-flex flex-column justify-content-evenly"
                            style={{ height: "530px" }}
                        >
                            <Carousel1 cars={carsInfo} />
                        </div>
                    </section>
                </div>
                <section className="sixth_section from_left_3 container">
                    <AlliesLineComponent />
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;
