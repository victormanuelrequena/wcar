import { Link, useParams } from 'react-router-dom';
import './DetailedCarPageStyles.scss';
import { FC, useEffect, useState } from "react";
import Layout from '../../../layout/Layout';
import di from '../../../../../di/DependencyInjection';
import GetCarByIdUseCase from '../../../../../domain/use_cases/car/GetCarByIdUseCase';
import CarEntity from '../../../../../domain/entities/CarEntity';
import NotResultsComponent from '../../../components/notResults/NotResultsComponent';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import CarCarouselImagesComponent from '../../../components/carCarousel/CarCarouselImagesComponent';
import StarRatingComponent from '../../../components/starRating/StarRatingComponent';
import CurrencyParse from '../../../../utils/CurrencyParse';
import { routes } from '../../../routes/RoutesComponent';

const DetailedCarPage: FC<{}> = () => {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<CarEntity | undefined | null>(undefined);

    const _getCar = async () => {
        try {
            const car = await di.get<GetCarByIdUseCase>(GetCarByIdUseCase.name).call(id!);
            setCar(car);
        } catch (error) {
            setCar(null);
        }
    }

    useEffect(() => {
        if (id) {
            _getCar();
        } else {
            setCar(null);
        }
    }, [id]);

    return <Layout>
        {id === undefined || car === null && <NotResultsComponent />}
        {car === undefined && <LoadingComponent />}
        {car !== null && car !== undefined && <div className="detailed_car_page">
            <section>
                <div className="bg_gray py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <CarCarouselImagesComponent images={car.images} />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="px-3">
                                    <div className="p-3 bg-white">
                                        <h1>{car.name}</h1>
                                        <div className="row" style={{ fontSize: '.9em' }}>
                                            <div className="col-4 d-flex align-items-center text_gray p-0">
                                                <img src="/assets/icons/year.svg" alt="" className="img-fluid img_icon  me-2 ms-3" />
                                                <span>{car.year}</span>
                                            </div>
                                            <div className="col-4 d-flex align-items-center text_gray p-0">
                                                <img src="/assets/icons/odometer.svg" alt="" className="img-fluid img_icon me-2" />
                                                <span className='text_nowrap'>{car.odometer} Km.</span>
                                            </div>
                                            <div className="col-4 d-flex align-items-center text_gray p-0">
                                                <img src="/assets/icons/transmission.svg" alt="" className="img-fluid img_icon me-1" />
                                                <span className='text_nowrap'>{car.transmission}</span>
                                            </div>
                                        </div>
                                        <span>
                                            {car.type.name} / {car.name} {car.year}
                                        </span> <br />
                                        <strong>
                                            Stock ID: {car.id}
                                        </strong> <br />
                                        <h3 className='text_bold'><strong> {CurrencyParse.toCop(car.price)}</strong></h3>
                                        <div className="w-100 d-flex">
                                            <StarRatingComponent rating={car.rating} />
                                            <span className="ms-2 text_gray">
                                                Estado del vehículo
                                            </span>
                                        </div>
                                        <div className="d-md-flex align-items-center">
                                            <Link to={routes.bookCar.relativePath + '/' + id} className="btn btn_orange my-3 me-3">SEPÁRALO AQUÍ</Link>
                                            <Link to={routes.dateForCar.relativePath + '/' + id} className="btn btn_orange_outline my-3">QUIERO CONOCERLO</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 bg_black">
                            <img src="/assets/recs/lines_box_large.png" alt="" className="h-100 img-fluid bg_img" />
                            <div className="d-flex flex-column align-items-center p-4">
                                <div className="side side_top">
                                    <h3 className="text-white"><strong>Caracteristicas</strong><br />
                                        <i>del vehiculo</i></h3>
                                </div>
                                <div className="btn btn_orange">DESCARGAR PERITAJE</div>
                            </div>
                        </div>
                        <hr className="d-md-none" />
                        <div className="col-12 col-md-9">
                            <div className="p-4">
                                <div className="row">
                                    <div className="col-12 col-md-8">
                                        <div className="row">
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/star.svg" className='img-fluid me-2' alt="" />
                                                    Marca:
                                                </span>
                                                <strong>{car.brand.name}</strong>
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/door.svg" className='img-fluid me-2' alt="" />
                                                    Puertas:
                                                </span>
                                                {/* <strong>{car.doors}</strong> */}
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/reference.svg" className='img-fluid me-2' alt="" />
                                                    Referencia:
                                                </span>
                                                {/* <strong>{car.model}</strong> */}
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/color.svg" className='img-fluid me-2' alt="" />
                                                    Color:
                                                </span>
                                                <strong>{car.color.name}</strong>
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/year.svg" className='img-fluid me-2' alt="" />
                                                    Modelo:
                                                </span>
                                                <strong>{car.year}</strong>
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/motor.svg" className='img-fluid me-2' alt="" />
                                                    Motor:
                                                </span>
                                                {/* <strong>{car.motor}</strong> */}
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/type_vehicle.svg" className='img-fluid me-2' alt="" />
                                                    Carroceria:
                                                </span>
                                                <strong>{car.type.name}</strong>
                                            </div>
                                            <div className="col-6 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/plate.svg" className='img-fluid me-2' alt="" />
                                                    Placa:
                                                </span>
                                                {/* <strong>{car.plate}</strong> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="row">
                                            <div className="col-12 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/transmision.svg" className='img-fluid me-2' alt="" />
                                                    Transmisión:
                                                </span>
                                                <strong>{car.transmission}</strong>
                                            </div>
                                            <div className="col-12 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/combustible.svg" className='img-fluid me-2' alt="" />
                                                    Combustible:
                                                </span>
                                                <strong>{car.typeOfFuel.name}</strong>
                                            </div>
                                            <div className="col-12 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/odometer.svg" className='img-fluid me-2' alt="" />
                                                    Kilometraje:
                                                </span>
                                                <strong>{car.odometer}</strong>
                                            </div>
                                            <div className="col-12 my-3">
                                                <span className='text_gray me-2'>
                                                    <img src="/assets/icons/status.svg" className='img-fluid me-2' alt="" />
                                                    Estado:
                                                </span>
                                                {/* <strong>{car.status}</strong> */}
                                            </div>
                                            <div className="d-flex">
                                                <div className="btn btn_cyan">CONTACTA UN ASESOR</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>}

    </Layout>
}

export default DetailedCarPage;