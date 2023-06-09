import React from "react";
import AlliesContextType from "./AlliesContextType";
import AllyEntity from "../../entities/AllyEntity";

const AlliesContext = React.createContext<AlliesContextType>({
    allies: [],
    setAllies: (allies: AllyEntity[]) => {}
});

export default AlliesContext;