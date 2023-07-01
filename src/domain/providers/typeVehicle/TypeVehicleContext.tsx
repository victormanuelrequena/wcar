import React from "react";
import TypeVehicleContextType from "./TypeVehicleContextType";
import TypeVehicleEntity from "../../entities/TypeVehicleEntity";

const TypeVehicleContext = React.createContext<TypeVehicleContextType>({
    typeVehicles: [],
    setTypeVehicles: (typeVehicles: TypeVehicleEntity[]) => {}
});

export default TypeVehicleContext;