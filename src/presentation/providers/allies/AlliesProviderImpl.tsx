import { FC, useState } from "react";
import AlliesContextType from "../../../domain/providers/allies/AlliesContextType";
import AllyEntity from "../../../domain/entities/AllyEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import AlliesContext from "../../../domain/providers/allies/AlliesContext";
import AlliesProvider from "../../../domain/providers/allies/AlliesProvider";

const _Actions: AlliesContextType = {
    allies: [],
    setAllies: (allies: AllyEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [_allies, setAllies] = useState<AllyEntity[]>([]);
    _Actions.setAllies = setAllies;
    _Actions.allies = _allies;

    return <AlliesContext.Provider value={{ allies: _allies, setAllies }}>
        {children}
    </AlliesContext.Provider>
}

class AlliesProviderImpl implements AlliesProvider {
    public context =  AlliesContext;
    public Actions: AlliesContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new AlliesProviderImpl();