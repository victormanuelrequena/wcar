import { FC, useState } from "react";
import TypeOfFuelContextType from "../../../domain/providers/typeOfFuel/TypeOfFuelContextType";
import TypeOfFuelEntity from "../../../domain/entities/TypeOfFuelEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import TypeOfFuelContext from "../../../domain/providers/typeOfFuel/TypeOfFuelContext";
import TypeOfFuelProvider from "../../../domain/providers/typeOfFuel/TypeOfFuelProvider";

const _Actions: TypeOfFuelContextType = {
    typeOfFuels: [],
    setTypeOfFuels: (typeOfFuels: TypeOfFuelEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [typeOfFuels, setTypeOfFuels] = useState<TypeOfFuelEntity[]>([]);
    _Actions.setTypeOfFuels = setTypeOfFuels;
    _Actions.typeOfFuels = typeOfFuels;

    return <TypeOfFuelContext.Provider value={{ typeOfFuels, setTypeOfFuels }}>
        {children}
    </TypeOfFuelContext.Provider>
}

class TypeOfFuelProviderImpl implements TypeOfFuelProvider {
    public context =  TypeOfFuelContext;
    public Actions: TypeOfFuelContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new TypeOfFuelProviderImpl();