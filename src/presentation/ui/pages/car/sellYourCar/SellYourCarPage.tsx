import { Link } from 'react-router-dom';
import CommentEntity from '../../../../../domain/entities/CommentEntity';
import Layout from '../../../layout/Layout';
import './SellYourCarPageStyles.scss';
import { FC, useEffect, useState } from "react";
import Icons from '../../../assets/Icons';
import ServicesComponent from './components/servicesComponent/ServicesComponent';
import SliderComponent from '../../../components/slider/SliderComponent';
import di from '../../../../../di/DependencyInjection';
import GetAllCommentsUseCase from '../../../../../domain/use_cases/comment/GetAllCommentsUseCase';
import StarRatingComponent from '../../../components/starRating/StarRatingComponent';
import DateParse from '../../../../utils/DateParse';
import { routes } from '../../../routes/RoutesComponent';
import CommenstLineComponent from '../../../components/commentsLine/CommentsLineComponent';
import GetAllProcedureQuestionsUseCase, { GetAllProcedureQuestionsUseCaseName } from '../../../../../domain/use_cases/frequentQuestion/GetAllProcedureQuestionsUseCase';
import FrequentQuestionEntity from '../../../../../domain/entities/FrequentQuestionEntity';
import AccordeonComponent from '../../../components/accordeon/AccordeonComponent';

const SellYourCarPage: FC<{}> = () => {
    const [frequentQuestions, setFrequentQuestions] = useState<FrequentQuestionEntity[]>([]);

    const _getFrequentQuestions = async () => {
        try {
            const respose = await di.get<GetAllProcedureQuestionsUseCase>(GetAllProcedureQuestionsUseCaseName).call();
            setFrequentQuestions(respose);
        } catch (error) {

        }
    }

    useEffect(() => {
        _getFrequentQuestions();
    }, []);

    return <Layout>
        <div className="sell_your_car_page">
            <section className="bg_black position-relative section_1">
                <img src="/assets/recs/bg_sell_car.jpeg" alt="" className="img_section_1 img-fluid" />
                <div className="container py-5 position-relative">
                    <div className="row">
                        <div className="col-md-4 text-white py-3">
                            <h1> <span className='text_bold'> Vende tu Carro<br />
                                a un precio</span>
                                <br /><span className="text_italic">razonable</span>
                            </h1>
                            <Link to={routes.quoteYourCar.relativePath} className='btn btn_orange'>
                                VENDE TU CARRO <Icons.ArrowCircle />
                            </Link>
                            <Link to={routes.contact.relativePath} className='btn btn_orange_transparent px-5 my-2'>Contacta a un asesor <Icons.ArrowCrossUp /></Link>
                        </div>
                    </div>
                </div>
                <div className="contact_fixed">
                    <a href="" className="btn btn_cyan">Contacta un asesor</a>
                </div>
            </section>
            <section className='banner_section'>
                <div className='d-flex flex-row w-100 h-100'>
                    <img src="/assets/sellCar/sell_img.png" alt="" className="img_banner_1 img-fluid" />
                    <div className='banner_background'></div>
                </div>
                <div className="container banner_content position-absolute">
                    <p className="text_bold bg-black px-4 banner_text">Vende tu carro fácil y seguro</p>
                </div>
            </section>
            <section>
                <ServicesComponent />
            </section>
            {/* Sell your car */}
            <section className='sell_section'>
                <div className='image_decoration'>
                    <img src="/assets/sellCar/md_bg_sell_decoration.png" className='img_decoration_md img-fluid' />
                    <img src="/assets/sellCar/sm_bg_sell_decoration.png" className='img_decoration_sm img-fluid' />
                    <div className='cross_line' />
                </div>
                <div className='sell_car_container'>
                    <img src="/assets/recs/lines_sell.png" alt="" className='lines_sell' />
                    <img src='assets/recs/lines_zigs.png' alt='' className='lines_zigs_sell' />
                    <img src="/assets/sellCar/car_sell_tires_img.png" alt="" className='img-fluid d-none d-md-inline-block' />
                    <div className='sell_car_description_container'>
                        <img src="/assets/recs/lines_box.png" alt="" className='little_sell_box img-fluid' />
                        {/* venta */}
                        <div className='sell_title_container'>
                            <div className='side side_blue_neon' />
                            <p className='m-0'>Venta</p>
                        </div>
                        {/* Vende tu carro */}
                        <h1 className='sell_car_title'>Vende tu carro de manera segura,</h1>
                        <h1 className='sell_car_subtitle mb-4'>rápida, confiable y justa.</h1>
                        <p className='mb-4'>En wcar nos preocupamos por la seguridad en cada servicio, el asesoramiento en cada negocio que un proceso tan tedioso como lo es la venta de carros en Colombia se hace fácil y sencillo</p>
                        <p className='mb-5'>Te ayudamos desde el primer contacto y gestionamos todos los procesos que requiere la venta de tu vehiculo, el comerciar con carros usados no es una tarea sencilla, pero conocemos el mercado y sabemos como ayudarte.</p>
                        {/* Botones */}
                        <div className='sell_buttons'>
                            <Link to={routes.quoteYourCar.relativePath} className='btn btn_orange me-0 me-sm-4 px-5 my-2'>Vende tu carro <Icons.ArrowCircle /> </Link>
                            <Link to={routes.contact.relativePath} className='btn btn_orange_transparent px-5 my-2'>Contacta a un asesor <Icons.ArrowCrossUp /></Link>
                        </div>
                    </div>
                    <img src="/assets/sellCar/car_sell_tires_little.png" alt="" className='img-fluid d-inline-block d-md-none' />
                </div>
            </section>
            <CommenstLineComponent />
            <section className="frequent_questions px-md-5 py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <AccordeonComponent
                                title={<h3 className="font_bold">Preguntas <span className="text_orange text_italic">frecuentes</span></h3>}
                                options={frequentQuestions.map((frequentQuestion) => {
                                    return {
                                        title: frequentQuestion.question,
                                        content: frequentQuestion.answer
                                    }
                                }
                                )} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
};

export default SellYourCarPage;