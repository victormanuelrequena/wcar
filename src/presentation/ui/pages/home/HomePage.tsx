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
const HomePage: FC<{}> = () => {
    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);

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
                    <img
                        src="/assets/home/car_01.svg"
                        alt="Comprar con wcar"
                        title="Comprar con wcar"
                        className="position-sm-absolute img_car_01"
                    />
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="d-flex flex-column">
                                    <h1 className="side side_top h5">wcar</h1>
                                    <h2 className="mt-3 h1">
                                        Más que <br />
                                        vender te <br />{" "}
                                        <span className="my-3 text_orange text_italic">aconsejamos</span>
                                    </h2>
                                    <Link to={routes.buyYourCar.relativePath}>
                                        <button className="my-3 btn btn_orange btn_shadow btn_cut">
                                            COMPRA TU CARRO <Icons.ArrowCircle />{" "}
                                        </button>
                                    </Link>
                                    <Link to={routes.sellYourCar.relativePath} className="mb-5">
                                        <button className="my-3 btn btn_orange_outline btn_shadow">
                                            VENDE TU CARRO <Icons.ArrowCircle />{" "}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second_section mt-3 car_02 from_left_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 d-flex d-md-block justify-content-center ">
                                <div className="side side_top text_black text_md_white">
                                    <h2 className="d-flex flex-md-column flex-row">
                                        <b className="me-2 me-md-0">¿Por qué</b>
                                        <div className="text_wcar">wcar?</div>
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
                                                    title="Garantía light por seis meses."
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
                        </div>
                    </div>
                </section>
                <section className="third_section mt-3">
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
                            <div className="col-md-8 position-relative text-white px-5 ps-md-5 px-md-3 py-5">
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
                                <div className="line_left_orange">Nosotros</div>
                                <h3 className="h3">
                                    <b>Razones para comprar y</b> <br />
                                    <i>vender con wcar</i>
                                </h3>
                                <div>
                                    <p>¡Somos el anti-dealer para que compres y vendas con cero estrés! </p>
                                    <p>
                                        En este revolucionario ecosistema encuentras una consejería personalizada. Somos
                                        brutalmente transparentes, dando a conocer el estado real del vehículo y
                                        ofreciendo precios razonables con un alto estándar de calidad.
                                    </p>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <a
                                        href={routes.buyYourCar.relativePath}
                                        className="btn btn_in_black_orange btn_cut btn_shadow me-3 my-2 w_fit_content"
                                    >
                                        COMPRA TU CARRO <Icons.ArrowCircle />
                                    </a>
                                    <a
                                        href={routes.sellYourCar.relativePath}
                                        className="btn btn_black  btn_cut btn_shadow my-2 w_fit_content"
                                    >
                                        VENDE TU CARRO <Icons.ArrowCircle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="forth_section">
                    <div className="d-flex justify-content-center py-5">
                        <div className="side side_top">
                            <h2 className="h3">
                                Vehículos <i className="text_orange">en venta</i>
                            </h2>
                        </div>
                    </div>
                    <div className="px-3 py-2 bg_gray">
                        <div className="container">
                            {cars ? (
                                <SliderComponent
                                    responsive={{
                                        mobile: {
                                            breakpoint: { max: 769, min: 0 },
                                            items: 1,
                                            slidesToSlide: 1, // optional, default to 1.
                                        },
                                        tablet: {
                                            breakpoint: { max: 1024, min: 769 },
                                            items: 2,
                                            slidesToSlide: 2, // optional, default to 1.
                                        },
                                        desktop: {
                                            breakpoint: { max: 1500, min: 1024 },
                                            items: 3,
                                            slidesToSlide: 3, // optional, default to 1.
                                        },
                                        largeDesktop: {
                                            breakpoint: { max: 3000, min: 1500 },
                                            items: 4,
                                            slidesToSlide: 4, // optional, default to 1.
                                        },
                                    }}
                                >
                                    {cars?.map((car, index) => (
                                        <div className="m-3" key={index}>
                                            <CarCardComponent car={car} />
                                        </div>
                                    ))}
                                </SliderComponent>
                            ) : (
                                <div>loading</div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="fifth_section from_left_3">
                    <div className="container">
                        <AlliesLineComponent />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;
