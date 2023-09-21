import './BuyOrSellPageStyles.scss';
import { FC } from "react";
import Layout from "../../../layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/RoutesComponent";
import Icons from "../../../assets/Icons";

const BuyOrSellPage: FC<{}> = () => {
    return <div className="buy_or_sell_page">
        <Layout>
            <Helmet>
                <title>Vende tu Carro en Colombia en 1, 2 por 3</title>
                <meta name='description' content='Vende tu carro rápido y seguro, acá te explicamos todo lo necesario para realizar un negocio rentable en la venta de tu vehículo. ¡Contáctanos y di Voy a Vender!' />
                <meta name='keywords' content='Vende tu carro, Carros Usados, Venta de Carros en Colombia, venta de carros usados, Voy a Vender' />
            </Helmet>
            <section className="bg_black position-relative section_1">
                <img src="/assets/pages/buyOrSell/banner.jpg" alt="Vende tu carro" title='Vende tu carro' className="img_section_1 img-fluid" />
                <div className="bg_black">
                    <div className="container py-5 position-relative">
                        <div className="row">
                            <div className="col-md-4 text-white py-3">
                                <div className="mb-3">
                                    <h1> <span className='text_bold'> Compra o vende<br /> tu carro en Colombia</span> <br /> <span className="text_italic">en 2023</span>
                                    </h1>
                                </div>
                                <Link to={routes.quoteYourCar.relativePath} className='btn btn_orange'>
                                    Vende tu carro <Icons.ArrowCircle />
                                </Link>
                                <Link to={routes.buyYourCar.relativePath} className='btn btn_orange px-5 my-2'>Compra tu carro <Icons.ArrowCrossUp /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sell_your_car py-5">
                <div className="container px-md-5">
                    <div className="px-md-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Vende tu carro en Colombia</h2>
                                <p className='py-3 h4'>Cuando te dices ¡Vende tu carro en Colombia! puede ser un proceso desafiante, especialmente si no tienes experiencia en la venta de vehículos. Es importante tener en cuenta que, en la actualidad, la mayoría de las personas buscan información en línea antes de tomar una decisión de compra, por lo que es fundamental que tu vehículo tenga una presencia en línea sólida y efectiva.</p>
                                <Link to={routes.sellYourCar.relativePath} className="btn btn_orange">Vende tu seguro aquí</Link>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-md-5"><img src="/assets/pages/buyOrSell/buy_your_car.jpg" alt="Compra o vende tu carro en Colombia" title='Compra o vende tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="buy_your_car py-5">
                <div className="container px-md-5">
                    <div className="px-md-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="pe-md-5"><img src="/assets/pages/buyOrSell/buy_your_car.jpg" alt="Compra o vende tu carro en Colombia" title='Compra o vende tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                            <div className="col-md-6">
                                <h2>Compra tu carro en Colombia</h2>
                                <p className='py-3 h4'>Cuando te dices ¡Compra tu carro en Colombia! los carros usados pueden ser una excelente opción. No solo ofrecen un precio más cómodo que los vehículos nuevos, sino que también puedes encontrar modelos más antiguos o raros que ya no están disponibles en el mercado. </p>
                                <p className='py-3 h4'>Sin embargo, al comprar un carro usado, es importante que tomes algunas precauciones para garantizar que estás haciendo una inversión segura y satisfactoria.</p>
                            </div>
                            <div className="col-md-6 py-2">
                                <p className='py-3 h4'>Cuando te dices ¡Compra tu carro en Colombia! los carros usados pueden ser una excelente opción. No solo ofrecen un precio más cómodo que los vehículos nuevos, sino que también puedes encontrar modelos más antiguos o raros que ya no están disponibles en el mercado. </p>
                                <p className='py-3 h4'>Sin embargo, al comprar un carro usado, es importante que tomes algunas precauciones para garantizar que estás haciendo una inversión segura y satisfactoria.</p>
                                <Link to={routes.sellYourCar.relativePath} className="btn btn_orange">Compra seguro aquí</Link>
                                <a href="https://listado.tucarro.com.co/wcar" className="ms-3 btn btn_orange">Listado tu carro.com</a>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-md-5"><img src="/assets/pages/buyOrSell/buy_your_car.jpg" alt="Compra o vende tu carro en Colombia" title='Compra o vende tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
}

export default BuyOrSellPage;