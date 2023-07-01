import { FC, useState } from "react";
import BrandContextType from "../../../domain/providers/brand/BrandContextType";
import BrandEntity from "../../../domain/entities/BrandEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import BrandContext from "../../../domain/providers/brand/BrandContext";
import BrandProvider from "../../../domain/providers/brand/BrandProvider";

const _Actions: BrandContextType = {
    brands: [],
    setBrands: (brands: BrandEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [brands, setBrands] = useState<BrandEntity[]>([]);
    _Actions.setBrands = setBrands;
    _Actions.brands = brands;

    return <BrandContext.Provider value={{ brands, setBrands }}>
        {children}
    </BrandContext.Provider>
}

class BrandProviderImpl implements BrandProvider {
    public context =  BrandContext;
    public Actions: BrandContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new BrandProviderImpl();