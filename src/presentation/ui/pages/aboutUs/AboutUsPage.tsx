import './AboutUsPageStyles.scss';
import { FC } from "react";
import Layout from "../../layout/Layout";
import Icons from '../../assets/Icons';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';
import CommenstLineComponent from '../../components/commentsLine/CommentsLineComponent';
import FrequentQuestionsComponent from '../../components/frequentQuestions/FrequentQuestionsComponent';
import CardVisionComponent from './components/cardVision/CardVisionComponent';

const AboutUsPage: FC<{}> = () => {
    return <div className="about_us_page">
        <Layout>
            <section className="w-100 position-relative section_1">
                <picture className='w-100'>
                    <source srcSet="/assets/aboutUs/bg_1_mobile.jpg" type="image/jpg" media="(max-width: 768px)" className='w-100' />
                    <img srcSet="/assets/aboutUs/bg_1.jpg" className='img-fluid w-100' />
                </picture>
                <img src="/assets/aboutUs/src_1.png" alt="" className="src_1" />
            </section>
            <section className="section_2 pt-5 pt-md-0">
                <div className="container our_company">
                    <div className="row d-flex flex-wrap">
                        <div className="col-md-5 d-none d-md-block position-relative">
                            <img src="/assets/aboutUs/bg_2.jpg" className='bg_2 img-fluid' alt="" />
                        </div>
                        <div className="col-md-7 bg_white">
                            <div className="info">
                                <div className="side side_top text_reduc bg_whiteed text_gray">Por qué nosotros</div>
                                <h5 className="text_bold">Nuestra Empresa</h5>
                                <p>
                                    En Latam el mercado de autos usados es de 6 millones de transacciones al año. WCar es el primer phygital ecosystem que se dirige al 90% de las personas que hacen esas transacciones de compra y venta de manera informal corriendo grandes riesgos. También nos enfocamos en quienes no están conformes con los concesionarios tradicionales ni las nuevas plataformas completamente virtuales que deshumanizan el proceso.
                                    En este revolucionario ecosistema nuestros clientes encuentran consejería personalizada para adquirir autos usados puestos a punto, además de productos complementarios e indispensables como financiación, garantías, seguros y trámites.
                                </p>
                                <Link to={routes.contact.relativePath} className="btn btn_cyan">
                                    CONTACTA UN ASESOR
                                    <Icons.Contact />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sized_infinited d-none d-md-block c2"><img src="assets/recs/lines_box_large.png" alt="" className="img_fluid" /></div>
                <div className="container our_mission py-5">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="side side_top side_blue_neon">
                                <h2>
                                    <span className="text_bold text_black text_md_white">Misión</span> <br className='d-none d-md-block' />
                                    <span className="text_orange text_md_white">& visión</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 my-3">
                            <CardVisionComponent minTitle="Misión" title='Inspirar a la generación actual y futura de compradores.' image={<div className='text_orange'> <Icons.StarCircle /> </div>} description='Brindamos una experiencia física y digital única, emocionante, basada en la transparencia brutal y precios razonables, potenciada por la última tecnología en IA y blockchain.' />
                        </div>
                        <div className="col-md-4 my-3">
                            <CardVisionComponent minTitle="Visión" title='Convertirnos en el referente en LATAM de la industria.' image={<div className='text_orange'> <Icons.HeartFilled /> </div>} description='Contruimos una comunidad de entusiastas del automóvil que celebre la innovación, la sostenibilidad y la tecnología, mientras transformamos la manera en que las personas compran y venden.' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_3 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <img src="/assets/aboutUs/asset_1.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-space-between">
                                    <img src="/assets/aboutUs/asset_2.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                    <img src="/assets/aboutUs/asset_3.jpg" alt="" className="img-fluid mt-3 object_cover w-100 flex-grow-1" />
                                </div>
                                <div className="col-6">
                                    <img src="/assets/aboutUs/asset_4.jpg" alt="" className="img-fluid mt-3 object_cover w-100 asset_4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-6">
                                    <img src="/assets/aboutUs/asset_5.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                </div>
                                <div className="col-6">
                                    <img src="/assets/aboutUs/asset_6.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                </div>
                                <div className="col-12">
                                    <img src="/assets/aboutUs/asset_7.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                </div>
                                <div className="col-6">
                                    <img src="/assets/aboutUs/asset_8.jpg" alt="" className="img-fluid mt-3 object_cover w-100" />
                                </div>
                                <div className="col-6">
                                    <img src="/assets/aboutUs/asset_9.jpg" alt="" className="img-fluid mt-3 object_cover w-100 asset_4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CommenstLineComponent />
            <section className="section_4 py-5 position-relative">
                <div className="sized_infinited d-none d-md-block bg_3 c4">
                    <img src="/assets/aboutUs/bg_3.jpg" alt="" className='img-fluid h-100 w-100 object_cover' />
                </div>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <FrequentQuestionsComponent />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 d-flex align-items-center">
                            <div className="bg_black card_contact">
                                <div className="left_line left_line_blue_neon text-white">Hablemos</div>
                                <h4 className="text-white">¿Necesitas asesoría? </h4>
                                <a href='#' className="d-flex align-items-center pe-4 mt-3">
                                    <Icons.Phone width={80} />
                                    <span className="text-white ps-1">Si tienes alguna pregunta <br />
                                        (00) 112 365 489</span>
                                </a>
                                <Link to={routes.contact.relativePath} className='btn btn_orange mt-4'>CONTÁCTA A UN ASESOR <Icons.Contact /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-md-none w-100"><img src="/assets/aboutUs/bg_3_mobile.jpg" alt="" className='img_fluid' /></div>
            </section>
        </Layout >
    </div>
}

export default AboutUsPage;