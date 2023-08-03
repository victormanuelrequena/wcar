import CarEntity from "../../entities/CarEntity";

type FavoriteCarsContextType = {
  favoriteCars: CarEntity[];
  setFavoriteCars: (favoriteCars: CarEntity[]) => void;
  addCar: (car: CarEntity) => void;
  removeCar: (car: CarEntity) => void;
};


export default FavoriteCarsContextType;