import { FC, useState } from "react";
import CarEntity from "../../../domain/entities/CarEntity";
import FavoriteCarsContextType from "../../../domain/providers/favoriteCars/FavoriteCarsContextType";
import FavoriteCarsContext from "../../../domain/providers/favoriteCars/FavoriteCarsContext";
import FavoriteCarsProvider from "../../../domain/providers/favoriteCars/FavoriteCarsProviderName";
import ProviderProps from '../../../domain/providers/ProviderProps';

const _Actions: FavoriteCarsContextType = {
    favoriteCars: [],
    setFavoriteCars: (favoriteCars: CarEntity[]) => { },
    addCar: (car: CarEntity) => { },
    removeCar: (car: CarEntity) => { },
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [favoriteCars, setFavoriteCars] = useState<CarEntity[]>([]);
    const addCar = (car: CarEntity) => {
        setFavoriteCars([...favoriteCars, car]);
    }
    const removeCar = (car: CarEntity) => {
        setFavoriteCars(favoriteCars.filter(_ => _.id !== car.id));
    }
    
    _Actions.setFavoriteCars = setFavoriteCars;
    _Actions.favoriteCars = favoriteCars;
    _Actions.addCar = addCar;
    _Actions.removeCar = removeCar;


    return <FavoriteCarsContext.Provider value={{ favoriteCars, setFavoriteCars, addCar, removeCar}}>
        {children}
    </FavoriteCarsContext.Provider>
}

class FavoriteCarsProviderImpl implements FavoriteCarsProvider {
    public context =  FavoriteCarsContext;
    public Actions: FavoriteCarsContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new FavoriteCarsProviderImpl();