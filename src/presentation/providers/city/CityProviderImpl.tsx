import { FC, useState } from "react";
import CityContextType from "../../../domain/providers/city/CityContextType";
import CityEntity from "../../../domain/entities/CityEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import CityContext from "../../../domain/providers/city/CityContext";
import CityProvider from "../../../domain/providers/city/CityProvider";

const _Actions: CityContextType = {
    cities: [],
    setCities: (cities: CityEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [cities, setCities] = useState<CityEntity[]>([]);
    _Actions.setCities = setCities;
    _Actions.cities = cities;

    return <CityContext.Provider value={{ cities, setCities }}>
        {children}
    </CityContext.Provider>
}

class CityProviderImpl implements CityProvider {
    public context =  CityContext;
    public Actions: CityContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new CityProviderImpl();