import { FC, useState } from "react";
import AllyContextType from "../../../domain/providers/ally/AllyContextType";
import AllyEntity from "../../../domain/entities/AllyEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import AllyContext from "../../../domain/providers/ally/AllyContext";
import AllyProvider from "../../../domain/providers/ally/AllyProvider";

const _Actions: AllyContextType = {
    allies: [],
    setAllies: (allies: AllyEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [allies, setAllies] = useState<AllyEntity[]>([]);
    _Actions.setAllies = setAllies;
    _Actions.allies = allies;

    return <AllyContext.Provider value={{ allies, setAllies }}>
        {children}
    </AllyContext.Provider>
}

class AllyProviderImpl implements AllyProvider {
    public context =  AllyContext;
    public Actions: AllyContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new AllyProviderImpl();