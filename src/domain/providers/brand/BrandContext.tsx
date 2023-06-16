import React from "react";
import BrandsContextType from "./BrandContextType";
import BrandEntity from "../../entities/BrandEntity";

const BrandContext = React.createContext<BrandsContextType>({
    brands: [],
    setBrands: (brands: BrandEntity[]) => {}
});

export default BrandContext;