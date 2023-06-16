import React from "react";
import AllyContextType from "./AllyContextType";
import AllyEntity from "../../entities/AllyEntity";

const AllyContext = React.createContext<AllyContextType>({
    allies: [],
    setAllies: (allies: AllyEntity[]) => {}
});

export default AllyContext;