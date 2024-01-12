import "./HomeStyles.scss";
import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Helmet } from "react-helmet-async";
import { routes } from "../../routes/RoutesComponent";
import { Link } from "react-router-dom";
import Icons from "../../assets/Icons";
import CardServiceComponent from "./components/cardService/CardServiceComponent";
import SliderComponent from "../../components/slider/SliderComponent";

const HomePage1 = () => {
    return (
        <Layout>
            <Helmet>
                <title>nuevo home</title>
                <meta
                    name="description"
                    content="WCAR - tu mejor opción para comprar y vender carros usados! Conocemos el mercado y te asesoramos para que encuentres el auto perfecto. ¡Contáctanos ahora!"
                />
            </Helmet>
            <div className="home_page1">
                <section className="first_section position-relative d-md-block d-flex flex-column-reverse">
                    <img
                        src="/assets/home/car_01.svg"
                        alt="Comprar con wcar"
                        title="Comprar con wcar"
                        className="img_car position-sm-absolute"
                    />
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="ms-4 d-flex flex-column">
                                    <h1 className="side side_top h5">wcar</h1>
                                    <h2 className="h1 text_black title">
                                        Más que
                                        <br />
                                        vender te
                                        <br />
                                        <span className="text_orange title_orange">aconsejamos</span>
                                    </h2>
                                    <br />
                                    <Link to={routes.buyYourCar.relativePath} className="w-auto">
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
                <section className="pt-3 second_section">
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
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage1;
