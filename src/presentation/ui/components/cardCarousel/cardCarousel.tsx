import { FC } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../routes/RoutesComponent";
import CurrencyParse from "../../../utils/CurrencyParse";
import "./cardCarouselStyles.scss";

export const CardCarousel: FC<{ car: any }> = ({ car }) => {
    const [_like, _setLike] = useState<boolean>(false);

    const getUrlCar = (car) => {
        let carUrl = `${car.type.type}/${car.car}/${car.id}`;
        carUrl = carUrl.replace(/ /g, "-").toLowerCase();
        return carUrl;
    };

    return (
        <Link to={`${routes.detailedCar.relativePath}/${getUrlCar(car)}`} className="card_carousel">
            <img
                src={car?.image_first}
                alt={`${car?.car} ${car?.brand_car.brand} ${car?.type.type}`}
                title="wcar"
                className="img_car"
            />
            <div className="card-body rounded-bottom p-2 d-flex flex-column">
                {car?.tag_car && (
                    <div
                        className="tag px-2"
                        style={{
                            backgroundColor: car.tag_car.tag.toLowerCase() === "disponible" ? null : car.tag_car.color,
                            color: car.tag_car.color === "#000" ? "#fff" : "#000",
                        }}
                    >
                        {car.tag_car.tag.toLowerCase() === "disponible" ? null : car.tag_car.tag}
                    </div>
                )}
                <div className="d-flex w-100 align-items-center justify-content-between px-1">
                    <div className="flex-grow overflow-hidden me-3">
                        <h5 className="text_black">{car?.car}</h5>
                    </div>
                    {_like ? (
                        <IoMdHeart size={32} className="text_red hover" />
                    ) : (
                        <IoMdHeartEmpty size={32} className="text_gray hover" />
                    )}
                </div>
                <div className="w-100 text_bold mt-1" style={{ color: "#666C89" }}>
                    {car?.type.type}
                </div>
                <div className="w-100 row justify-content-flex-start mt-3" style={{ fontSize: ".9em", margin: "auto" }}>
                    <div className="col-3 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/calendar.svg"
                            alt="wcar"
                            title="wcar"
                            className="img-fluid img_icon me-2"
                        />
                        <span>{car?.year}</span>
                    </div>
                    <div className="col-4 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/odometer.svg"
                            alt="wcar"
                            title="wcar"
                            className="img-fluid img_icon me-2"
                        />
                        <span className="text_nowrap">{car?.mileage} Km.</span>
                    </div>
                    <div className="col-3 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/transmission.svg"
                            alt="wcar"
                            title="wcar"
                            className="img-fluid img_icon me-1"
                        />
                        <span className="text_nowrap">{car?.transmission === 1 ? "Automática" : "Manual"}</span>
                    </div>
                </div>
                <div
                    className={`botton_container w-100 d-flex align-items-center justfy-content-between ${
                        car?.discount_price ? "mt-2" : "mt-4"
                    }`}
                >
                    <div className="flex-grow-1 text_ellipsis">
                        <h5 className={`text_bold text_black card-price`}>
                            {CurrencyParse.toCop(
                                car?.discount_price !== null && car?.discount_price !== "0.00"
                                    ? car?.discount_price
                                    : car?.price
                            )}
                        </h5>
                        <span className="text_bold text_black text_through">
                            {car?.discount_price && car?.discount_price !== "0.00" && CurrencyParse.toCop(car?.price)}
                        </span>
                    </div>
                    <div className="ms-3 px-4 btn btn_orange view-btn">VER</div>
                </div>
            </div>
        </Link>
    );
};
