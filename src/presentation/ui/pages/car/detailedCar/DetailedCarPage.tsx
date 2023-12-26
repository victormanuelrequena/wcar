import { Link, useParams } from "react-router-dom";
import "./DetailedCarPageStyles.scss";
import { FC, useContext, useEffect, useRef, useState } from "react";
import Layout from "../../../layout/Layout";
import di from "../../../../../di/DependencyInjection";
import GetCarByIdUseCase, { GetCarByIdUseCaseName } from "../../../../../domain/use_cases/car/GetCarByIdUseCase";
import CarEntity from "../../../../../domain/entities/CarEntity";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import CarCarouselImagesComponent from "../../../components/carCarousel/CarCarouselImagesComponent";
import CurrencyParse from "../../../../utils/CurrencyParse";
import { routes } from "../../../routes/RoutesComponent";
import CarCardComponent from "../../../components/carCard/CarCardComponent";
import SliderComponent from "../../../components/slider/SliderComponent";
import GetRelatedCarsByCardIdUseCase, {
    GetRelatedCarsByCardIdUseCaseName,
} from "../../../../../domain/use_cases/car/GetRelatedCarsByCardIdUseCase";
import Icons from "../../../assets/Icons";
import { BookADateActions } from "../bookADate/BookADatePage";
import { Helmet } from "react-helmet-async";
import BookACarUseCase, { BookACarUseCaseName } from "../../../../../domain/use_cases/book/BookACarUseCase";
import ModalsContextType from "../../../../../domain/providers/modal/ModalsContextType";
import ModalsContext from "../../../../../domain/providers/modal/ModalsContext";
import PreviewImage from "./component/PreviewImage";
import ModalAmount from "./component/ModalAmount";
import { InlineWidget, PopupButton } from "react-calendly";
import { Carousel1 } from "../../../components/carousel/carousel";
import { WebShare } from "../../../components/webShare/webShare";

const DetailedCarPage: FC<{}> = () => {
    const { id } = useParams<{ id: string }>();
    const [car, setCar] = useState<CarEntity | undefined | null>(undefined);
    const [relatedCars, setRelatedCars] = useState<CarEntity[] | undefined | null>(undefined);
    const { addToast } = useContext(ModalsContext) as ModalsContextType;
    const [showPeritajeImage, setShowPeritajeImage] = useState(false);
    const [showAmountModal, setShowAmountModal] = useState(false);
    const [open, setOpen] = useState(false);
    const rootElement = useRef(null);

    console.log(car?.description.replace(/\n/g, "\n").split("\n"));

    console.log(car);

    const _getCar = async () => {
        try {
            const car = await di.get<GetCarByIdUseCase>(GetCarByIdUseCaseName).call(id!);
            setCar(car == null ? null : car);
        } catch (error) {
            setCar(null);
        }
    };

    const capitalizeFirstLetters = (str: string) => {
        const words = str.split(" ");
        const capitalizedWords = words.map((word) => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word; // Keep empty words as they are
        });
        const result = capitalizedWords.join(" ");
        return result;
    };

    const _getRelatedCars = async () => {
        try {
            const cars = await di.get<GetRelatedCarsByCardIdUseCase>(GetRelatedCarsByCardIdUseCaseName).call(id!);
            setRelatedCars(cars);
        } catch (error) {
            setRelatedCars([]);
        }
    };

    const _bookCarWithPayment = async () => {
        try {
            setShowAmountModal(true);
        } catch (error) {
            addToast("Error al reservar el vehículo", "error", null);
        }
    };

    useEffect(() => {
        if (id) {
            _getCar();
            _getRelatedCars();
        } else {
            setCar(null);
        }
    }, [id]);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log("CAR TAG", car?.tag?.name);
    }, [car]);

    return (
        <Layout>
            {(id === undefined || car === null) && <NotResultsComponent />}
            {car === undefined && <LoadingComponent />}
            {car !== null && car !== undefined && (
                <div className="detailed_car_page">
                    <section>
                        <div className="bg_gray py-5">
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-lg-7 col-xl-8">
                                        <CarCarouselImagesComponent car={car} images={car.images} />
                                    </div>
                                    <div className="col-12 col-lg-5 col-xl-4">
                                        <div>
                                            <div className="p-3 bg-white rounded w-100 mt-5 mt-lg-0">
                                                <div className="mb-2 ms-1">
                                                    <WebShare />
                                                </div>
                                                <h1 className="name-car-detail">{capitalizeFirstLetters(car.name)}</h1>
                                                <div
                                                    className="d-flex flex-row mt-2 justify-content-start"
                                                    style={{ fontSize: ".9em" }}
                                                >
                                                    <div className="d-flex align-items-center text_gray p-0">
                                                        <img
                                                            src="/assets/icons/calendar.svg"
                                                            alt="wcar"
                                                            title="wcar"
                                                            className="img-fluid img_icon me-2"
                                                        />
                                                        <span className="text-spec">{car.year}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center text_gray p-0 ms-2">
                                                        <img
                                                            src="/assets/icons/odometer.svg"
                                                            alt="wcar"
                                                            title="wcar"
                                                            className="img-fluid img_icon me-2"
                                                        />
                                                        <span className="text_nowrap text-spec">
                                                            {car.odometer} Km.
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center text_gray p-0 ms-2">
                                                        <img
                                                            src="/assets/icons/transmission.svg"
                                                            alt="wcar"
                                                            title="wcar"
                                                            className="img-fluid img_icon me-2"
                                                        />
                                                        <span className="text_nowrap text-spec">
                                                            {car.transmission}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <p className="car-spec">
                                                        {car.type.name} / {car.name} {car.year}
                                                    </p>{" "}
                                                    <strong>Stock ID: {car.id}</strong>
                                                </div>
                                                <div className="text_ellipsis">
                                                    <h3 className="text_bold car-price">
                                                        {car?.tag?.name !== "Reservado" &&
                                                            CurrencyParse.toCop(car.discount_price ?? car.price)}
                                                    </h3>
                                                    {car.discount_price && (
                                                        <h5 className="text_bold text_gray text_through">
                                                            {CurrencyParse.toCop(car.price)}
                                                        </h5>
                                                    )}
                                                </div>
                                                <div className="d-inline-flex flex-column justify-content-start align-items-start mt-1">
                                                    <div
                                                        className="btn my-3 me-3 btn-detailed-car"
                                                        style={{
                                                            color: "#000",
                                                            height: "42px",
                                                            border: "none",
                                                            backgroundColor: "#00fefe",
                                                        }}
                                                        onClick={() => setShowPeritajeImage(true)}
                                                    >
                                                        VER PERITAJE <Icons.Download />{" "}
                                                    </div>
                                                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                                                        {car?.tag?.name !== "Reservado" && (
                                                            <div
                                                                onClick={_bookCarWithPayment}
                                                                className="btn btn_orange my-1 me-3 btn-detailed-car"
                                                            >
                                                                SEPÁRALO AQUÍ <Icons.ArrowCircle />
                                                            </div>
                                                        )}

                                                        {/* <Link
                                                            target="_blank"
                                                            to={"https://calendar.app.google/9Ak2MQecfkFpdCjG7"}
                                                            className="btn btn_orange_outline my-1 btn-detailed-car "
                                                            style={{ fontSize: 11 }}
                                                        >
                                                            AGENDA TU LLAMADA
                                                            <Icons.ArrowCircle />
                                                        </Link> */}
                                                    </div>

                                                    {/* <PopupButton
                                                        url="https://calendly.com/wcar-1fk/30min"
                                                        className="btn btn_orange_outline my-3 me-3 btn-detailed-car"
                                                        rootElement={rootElement.current}
                                                        text={"AGENDA TU LLAMADA CON UN ASESOR"}
                                                    /> */}
                                                    {/* {true && <InlineWidget url="https://calendly.com/wcar-1fk/30min" />} */}
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
                                    <img
                                        src="/assets/recs/lines_box_large.png"
                                        alt="wcar"
                                        title="wcar"
                                        className="h-100 img-fluid bg_img"
                                    />
                                    <div className="d-flex flex-column align-items-center p-4">
                                        <div className="side side_top">
                                            <h3 className="text-white">
                                                <strong>Características</strong>
                                                <br />
                                                <i>del vehículo</i>
                                            </h3>
                                        </div>
                                        {/* <div
                                            className="btn btn_orange font-bold"
                                            onClick={() => setShowPeritajeImage(true)}
                                        >
                                            VER PERITAJE <Icons.Download />{" "}
                                        </div> */}
                                        <Link
                                            to={routes.dateForCar.relativePath + "/" + BookADateActions.see + "/" + id}
                                            className="btn btn_orange btn-detailed-car"
                                        >
                                            QUIERO CONOCERLO <Icons.ArrowCircle />
                                        </Link>
                                    </div>
                                </div>
                                <hr className="d-md-none" />
                                <div className="col-12 col-md-9">
                                    <div className="p-4">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/star.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Marca:
                                                        </span>
                                                        <strong>{car.brand.name}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/door.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Puertas:
                                                        </span>
                                                        <strong>{car.doors}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/reference.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Referencia:
                                                        </span>
                                                        <strong>{car.model}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/color.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Color:
                                                        </span>
                                                        <strong>{car.color.name}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/calendar.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Año:
                                                        </span>
                                                        <strong>{car.year}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/motor.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Motor:
                                                        </span>
                                                        <strong>{car.motor}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/type_vehicle.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Carroceria:
                                                        </span>
                                                        <strong>{car.type.name}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/plate.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Placa:
                                                        </span>
                                                        <strong>{car.plate}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/transmission.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Transmisión:
                                                        </span>
                                                        <strong>{car.transmission}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/combustible.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Combustible:
                                                        </span>
                                                        <strong>{car.typeOfFuel.name}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/odometer.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Kilometraje:
                                                        </span>
                                                        <strong>{car.odometer}</strong>
                                                    </div>
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                src="/assets/icons/status.svg"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Estado:
                                                        </span>
                                                        <strong>{car.status}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 my-3 bg-danger">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                style={{ width: "24px" }}
                                                                src="/assets/icons/valor.png"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Reclamaciones:
                                                        </span>
                                                        <strong>
                                                            {car.claims
                                                                ? `Sí | ${CurrencyParse.toCop(car.amount_claims)}`
                                                                : "No"}
                                                        </strong>
                                                    </div>
                                                    {/* {car.claims && (
                                                        <div className="col-12 my-3">
                                                            <span className="text_gray me-2">
                                                                <img
                                                                    src="/assets/icons/combustible.svg"
                                                                    className="img-fluid me-2"
                                                                    alt="wcar"
                                                                    title="wcar"
                                                                />
                                                                Cuantía:
                                                            </span>
                                                            <strong>{car.amount_claims}</strong>
                                                        </div>
                                                    )} */}
                                                    <div className="col-12 my-3">
                                                        <span className="text_gray me-2">
                                                            <img
                                                                style={{ width: "24px" }}
                                                                src="/assets/icons/reclamaciones.png"
                                                                className="img-fluid me-2"
                                                                alt="wcar"
                                                                title="wcar"
                                                            />
                                                            Garantía:
                                                        </span>
                                                        <strong>
                                                            {car.warranty ? `Si | ${car.type_warranty}` : "No"}
                                                        </strong>
                                                    </div>
                                                    {/* {car.warranty && (
                                                        <div className="col-12 my-3">
                                                            <span className="text_gray me-2">
                                                                <img
                                                                    src="/assets/icons/status.svg"
                                                                    className="img-fluid me-2"
                                                                    alt="wcar"
                                                                    title="wcar"
                                                                />
                                                                Tipo de garantía:
                                                            </span>
                                                            <strong>{car.type_warranty}</strong>
                                                        </div>
                                                    )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-9">
                                    <div className="d-flex jusstify-content-center justify-content-md-start p-3">
                                        <Link to={routes.contact.relativePath} className="btn btn_cyan">
                                            CONTACTA UN ASESOR <Icons.Contact />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-2"></div>
                                <div className="col-md-10 bg_gray">
                                    <div className="p-5">
                                        <h3 className="text_bold side side_top">
                                            <strong>Descripción</strong>
                                        </h3>
                                        <div className="description">
                                            {car?.description.split("\n").map((item, i) => {
                                                return (
                                                    item !== "\r" && (
                                                        <p key={i} className="item">
                                                            {item}
                                                        </p>
                                                    )
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-9 p-5">
                                    <div className="side side_top">
                                        <h2 className="text_bold">
                                            Vehículos<span className="text_orange"> relacionados</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {/* <div id="plateNumber" data-fullplate={car.fullPlate}>
                                {car.fullPlate}
                            </div> */}
                        </div>
                        <Helmet>
                            <script src="https://integrator.swipetospin.com" />
                        </Helmet>
                    </section>
                    <section
                        className="container w-100 d-flex flex-column justify-content-evenly"
                        style={{ height: "500px" }}
                    >
                        <Carousel1 carUrl={`cars-related/${car.id}`} />
                    </section>
                    <div className="container">
                        {relatedCars ? (
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
                                        breakpoint: { max: 1280, min: 1024 },
                                        items: 3,
                                        slidesToSlide: 3, // optional, default to 1.
                                    },
                                    largeDesktop: {
                                        breakpoint: { max: 3000, min: 1280 },
                                        items: 4,
                                        slidesToSlide: 4, // optional, default to 1.
                                    },
                                }}
                            >
                                {relatedCars?.map((car, index) => (
                                    <div className="m-3" key={index}>
                                        <CarCardComponent car={car} />
                                    </div>
                                ))}
                            </SliderComponent>
                        ) : (
                            <div>loading</div>
                        )}
                    </div>
                    {showPeritajeImage && (
                        <PreviewImage
                            imageUrl={car?.expertise}
                            idColserauto={car?.id_colserauto}
                            close={() => {
                                setShowPeritajeImage(false);
                            }}
                        />
                    )}
                    {showAmountModal && (
                        <ModalAmount
                            id={id}
                            close={() => setShowAmountModal(false)}
                            carValue={car.discount_price ?? car.price}
                        />
                    )}
                </div>
            )}
        </Layout>
    );
};

export default DetailedCarPage;
