import React from "react";
import CityEntity from "../../entities/CityEntity";
import CityContextType from "./CityContextType";

const CityContext = React.createContext<CityContextType>({
    cities: [],
    setCities: (cities: CityEntity[]) => {}
});

export default CityContext;