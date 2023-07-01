import React from "react";
import TypeOfFuelContextType from "./TypeOfFuelContextType";
import TypeOfFuelEntity from "../../entities/TypeOfFuelEntity";

const TypeOfFuelContext = React.createContext<TypeOfFuelContextType>({
    typeOfFuels: [],
    setTypeOfFuels: (typeOfFuels: TypeOfFuelEntity[]) => {}
});

export default TypeOfFuelContext;