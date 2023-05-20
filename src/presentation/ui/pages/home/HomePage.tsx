import './HomeStyles.scss';
import { FC, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardServiceComponent from './components/cardService/CardServiceComponent';

const _responsive_carrousel = {
    mobile: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const HomePage: FC<{}> = () => {
    const [currentSideServices, setCurrentSideServices] = useState(0);

    return <div className="home_page">
        <section className='first_section position-relative d-md-block d-flex flex-column-reverse'>
            <img src="/assets/home/car_01.png" alt="" className="position-sm-absolute img_car_01" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="d-flex flex-column">
                            <div className="side side_top">wcar</div>
                            <h1 className='mt-3'>
                                Más que <br />
                                vender te <br />
                                <span className="my-3 text_orange text_italic">aconsejamos</span>
                            </h1>
                            <div>
                                <button className="my-3 btn btn_orange btn_shadow btn_cut">COMPRA TU CARRO</button>
                            </div>
                            <div className='mb-5'>
                                <button className="my-3 btn btn_orange_outline btn_cut btn_shadow">VENDE TU CARRO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='second_section mt-3 car_02'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-flex d-md-block justify-content-center ">
                        <div className="side side_top text_black text_md_white">
                            <h2 className='d-flex flex-md-column flex-row'>
                                <b className='me-2 me-md-0'>¿Por qué</b>
                                <div className="text_wcar">wcar?</div>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="w-100">
                            <Carousel
                                arrows={false}
                                swipeable={true}
                                responsive={_responsive_carrousel} beforeChange={(slide, _) => setCurrentSideServices(slide)}>
                                <div>
                                    <div className="row">
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                        <div className="col-md-4 my-3">
                                            <CardServiceComponent title='Garantía light por seis meses.' image='/assets/icons/person.svg' description='Puedes extenderla hasta 2 años si lo deseas.' />
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <div className="px-5 d-md-none">
                            <div className="w-100 d-flex">
                                {Array(2).fill(0).map((_, index) => {
                                    return <div className={`flex-grow-1 indicator_slide ${currentSideServices == index && 'active'}`} key={index}></div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='third_section mt-3'>
            <img src="./assets/recs/lines_box.png" className='d-none d-md-block' alt="" style={{ position: 'absolute', right: 0, bottom: 0 }} />
            <div className="container">
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className="px-0 px-md-3 col-md-3 position-relative"><img src="./assets/home/car_03.png" alt="" className="object_cover img_section" /></div>
                    <div className="col-md-9 position-relative text-white px-5 ps-md-5 px-md-3 py-5">
                        <img src="./assets/recs/lines_zigs.png" alt="" style={{ position: 'absolute', right: '5vw', top: '2vw' }} />
                        <img src="./assets/recs/lines_box.png" className='d-block d-md-none' alt="" style={{ position: 'absolute', right: 0, bottom: 0 }} />
                        <div className="line_left_orange">Nosotros</div>
                        <h3>Razones para comprar y <br /><i>vender con wcar</i></h3>
                        <div>
                            <p>¡Somos el anti-dealer para que compres y vendas cero estrés! </p>
                            <p>En este revolucionario ecosistema encuentras una consejería personalizada. Somos brutalmente transparentes, dando a conocer el estado real del vehículo y ofreciendo precios razonables con un alto estándar de calidad.</p>
                        </div>
                        <div className="d-flex flex-column flex-md-row">
                            <a href="#" className="btn btn_in_black_orange btn_cut btn_shadow me-3 my-2 w_fit_content">COMPRA TU CARRO</a>
                            <a href="#" className="btn btn_black  btn_cut btn_shadow my-2 w_fit_content">VENDE TU CARRO</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default HomePage;