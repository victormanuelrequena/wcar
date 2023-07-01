import { FC, useState } from "react";
import TypeVehicleContextType from "../../../domain/providers/typeVehicle/TypeVehicleContextType";
import TypeVehicleEntity from "../../../domain/entities/TypeVehicleEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import TypeVehicleContext from "../../../domain/providers/typeVehicle/TypeVehicleContext";
import TypeVehicleProvider from "../../../domain/providers/typeVehicle/TypeVehicleProvider";

const _Actions: TypeVehicleContextType = {
    typeVehicles: [],
    setTypeVehicles: (typeVehicles: TypeVehicleEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [typeVehicles, setTypeVehicles] = useState<TypeVehicleEntity[]>([]);
    _Actions.setTypeVehicles = setTypeVehicles;
    _Actions.typeVehicles = typeVehicles;

    return <TypeVehicleContext.Provider value={{ typeVehicles, setTypeVehicles }}>
        {children}
    </TypeVehicleContext.Provider>
}

class TypeVehicleProviderImpl implements TypeVehicleProvider {
    public context =  TypeVehicleContext;
    public Actions: TypeVehicleContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new TypeVehicleProviderImpl();