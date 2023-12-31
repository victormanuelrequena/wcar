import "./CardFavoriteComponentStyles.scss";
import { FC, useContext } from "react";
import CardFavoriteComponentProps from "./CardFavoriteComponentProps";
import FavoriteCarsContextType from "../../../../../../domain/providers/favoriteCars/FavoriteCarsContextType";
import FavoriteCarsContext from "../../../../../../domain/providers/favoriteCars/FavoriteCarsContext";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes/RoutesComponent";
import { getUrlCar } from "../../../../../utils/Contants";

const CardFavoriteComponent: FC<CardFavoriteComponentProps> = ({}) => {
    const { favoriteCars } = useContext(FavoriteCarsContext) as FavoriteCarsContextType;

    if (!favoriteCars.length)
        return <div className="card_favorite_component p-4">Agrega tus favoritos para verlos aquí </div>;
    return (
        <div className="card_favorite_component">
            {favoriteCars.map((favoriteCar, index) => (
                <Link
                    to={`${routes.detailedCar.relativePath}/${getUrlCar(favoriteCar)}`}
                    className="car_item d-flex"
                    key={index}
                >
                    <div className="car_image d-flex justify-content-center align-items-center">
                        <img src={favoriteCar.photoUrl} alt="wcar" title="wcar" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 ms-3">
                        <strong>{favoriteCar.name}</strong>
                        <span>{favoriteCar.brand.name} </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CardFavoriteComponent;
