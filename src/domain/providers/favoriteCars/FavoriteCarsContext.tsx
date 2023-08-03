import React from "react";
import FavoriteCarsContextType from "./FavoriteCarsContextType";
import CarEntity from "../../entities/CarEntity";

const FavoriteCarsContext = React.createContext<FavoriteCarsContextType>({
    favoriteCars: [],
    setFavoriteCars: (favoriteCars: CarEntity[]) => {},
    addCar: (car: CarEntity) => {},
    removeCar: (car: CarEntity) => {},
});

export default FavoriteCarsContext;