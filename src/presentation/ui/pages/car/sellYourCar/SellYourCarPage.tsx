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
import FrequentQuestionsComponent from '../../../components/frequentQuestions/FrequentQuestionsComponent';
import { routes } from '../../../routes/RoutesComponent';

const SellYourCarPage: FC<{}> = () => {
    const [comments, setComments] = useState<CommentEntity[]>([]);

    const _getComments = async () => {
        try {
            const response = await di.get<GetAllCommentsUseCase>(GetAllCommentsUseCase.name).call();
            setComments(response);
        } catch (e) {
            setComments([]);
        }
    };

    useEffect(() => {
        _getComments();
    }, [])

    return <Layout>
        <div className="sell_your_car_page">
            <section className="bg_black position-relative section_1">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 text-white py-3">
                            <h1> <span className='text_bold'> Vende tu Carro<br />
                                a un precio</span>
                                <br /><span className="text_italic">razonable</span>
                            </h1>
                            <Link to={routes.quoteYourCar.relativePath} className='btn btn_orange'>
                                VENDE TU CARRO <Icons.ArrowCircle />
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="/assets/recs/bg_sell_car.jpeg" alt="" className="img_section_1 img-fluid" />
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
                            <Link to={"#"} className='btn btn_orange_transparent px-5 my-2'>Contacta a un asesor <Icons.ArrowCrossUp /></Link>
                        </div>
                    </div>
                    <img src="/assets/sellCar/car_sell_tires_little.png" alt="" className='img-fluid d-inline-block d-md-none' />
                </div>
            </section>
            <section className='allies-say'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-3 d-md-flex justify-content-start justify-content-md-end align-items-center black_side">
                            <img src='assets/recs/lines_box_large.png' className='position-absolute start-0 allies_say_lines_img h-100' />
                            <div className="side side_top side_md_blue_neon text_black text_md_white mt-5 ms-3 mt-md-0 pe-5">
                                <h2>
                                    <b className='me-2 me-md-0 d-none d-md-block'>¿Qué</b>
                                    <span className='me-2 me-md-0 d-none d-md-block'>dicen de</span>
                                    <b className='me-2 me-md-0 d-block d-md-none'>¿Qué dicen de</b>
                                    <div className="text_wcar">wcar?</div>
                                </h2>
                            </div>
                        </div>
                        <div className='col-md-9 pt-md-5 px-3 px-md-1 pb-4'>
                            <SliderComponent responsive={{
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
                                    breakpoint: { max: 1280, min: 1024 },
                                    items: 2,
                                    slidesToSlide: 2, // optional, default to 1.
                                },
                                largeDesktop: {
                                    breakpoint: { max: 3000, min: 1280 },
                                    items: 3,
                                    slidesToSlide: 3, // optional, default to 1.
                                },
                            }}>
                                {comments.map((comment, index) => <div className="comment px-3 mb-4" key={index}>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <div className="d-flex mb-3">
                                                <div>
                                                    <img src={comment.photoUrl} alt="" className=" img_rounded" />
                                                </div>
                                                <div className="flex-grow-1 d-flex flex-column px-2">
                                                    <strong>{comment.name}</strong>
                                                    <div className="d-flex align-items-star">
                                                        <div className="me-1"><strong>{comment.calification}</strong></div>
                                                        <StarRatingComponent rating={comment.calification} />
                                                    </div>
                                                </div>
                                                <Icons.Quote />
                                            </div>
                                            <p>{comment.content}</p>
                                            <p className="text_gray">
                                                {DateParse.dateToMonthDayYear(comment.date)}
                                            </p>
                                        </div>
                                    </div>
                                </div>)}
                            </SliderComponent>
                        </div>
                    </div>
                </div>
            </section>

            <section className="frequent_questions px-md-5 py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <FrequentQuestionsComponent />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
};

export default SellYourCarPage;