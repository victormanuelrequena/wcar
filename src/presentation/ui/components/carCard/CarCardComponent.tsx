import "./CardComponentStyles.scss";
import { FC, useContext, useEffect, useState } from "react";
import CarCardComponentProps from "./CarCardComponentProps";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import di from "../../../../di/DependencyInjection";
import LikeCarUseCase, { LikeCarUseCaseName } from "../../../../domain/use_cases/car/LikeCarUseCase";
import CurrencyParse from "../../../utils/CurrencyParse";
import { Link } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";
import { isLeft } from "fp-ts/lib/Either";
import FavoriteCarsContext from "../../../../domain/providers/favoriteCars/FavoriteCarsContext";
import FavoriteCarsContextType from "../../../../domain/providers/favoriteCars/FavoriteCarsContextType";
import { getUrlCar } from "../../../utils/Contants";

const CarCardComponent: FC<CarCardComponentProps> = ({ car }) => {
    const [_like, _setLike] = useState<boolean>(false);
    const { favoriteCars } = useContext(FavoriteCarsContext) as FavoriteCarsContextType;

    const _checkLike = () => {
        if (favoriteCars.find((favoriteCar) => favoriteCar.id == car.id)) {
            _setLike(true);
        }
    };

    const _handleLike = async () => {
        const response = await di.get<LikeCarUseCase>(LikeCarUseCaseName).call(car, !_like);
        if (isLeft(response) && response.left.code == "unauthorized") return alert(response.left.message);
        _setLike(!_like);
    };

    useEffect(() => {
        _checkLike();
    }, [favoriteCars]);

    return (
        <Link to={`${routes.detailedCar.relativePath}/${getUrlCar(car)}`} className="w-100 card car_card_component">
            <img
                src={car.photoUrl}
                alt={`${car.name} ${car.brand.name} ${car.type.name}`}
                title="Wcar"
                className="img-fluid img_car"
            />
            <div className="card-body">
                {car.tag && (
                    <div className="tag" style={{ backgroundColor: car.tag.color }}>
                        {car.tag.name}
                    </div>
                )}
                <div className="d-flex w-100 align-items-center">
                    <div className="flex-grow overflow-hidden me-3">
                        <h5 className="text_ellipsis">{car.name}</h5>
                    </div>
                    {_like ? (
                        <IoMdHeart size={32} className="text_red hover" onClick={_handleLike} />
                    ) : (
                        <IoMdHeartEmpty size={32} className="text_gray hover" onClick={_handleLike} />
                    )}
                </div>
                <div className="w-100 text_bold mb-1">{car.type.name}</div>
                <div className="row" style={{ fontSize: ".9em" }}>
                    <div className="col-4 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/year.svg"
                            alt="Wcar"
                            title="Wcar"
                            className="img-fluid img_icon  me-2 ms-3"
                        />
                        <span>{car.year}</span>
                    </div>
                    <div className="col-4 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/odometer.svg"
                            alt="Wcar"
                            title="Wcar"
                            className="img-fluid img_icon me-2"
                        />
                        <span className="text_nowrap">{car.odometer} Km.</span>
                    </div>
                    <div className="col-4 d-flex align-items-center text_gray p-0">
                        <img
                            src="/assets/icons/transmission.svg"
                            alt="Wcar"
                            title="Wcar"
                            className="img-fluid img_icon me-1"
                        />
                        <span className="text_nowrap">{car.transmission}</span>
                    </div>
                </div>
                <div className="w-100 d-flex align-items-center justfy-content-between mt-3">
                    <div className="flex-grow-1 text_ellipsis">
                        <h5 className="text_bold">{CurrencyParse.toCop(car.discount ?? car.price)}</h5>
                        {car.discount && (
                            <span className="text_bold text_gray text_through">{CurrencyParse.toCop(car.price)}</span>
                        )}
                    </div>
                    <div className="ms-3 px-4 btn btn_orange">VER</div>
                </div>
            </div>
        </Link>
    );
};

export default CarCardComponent;
