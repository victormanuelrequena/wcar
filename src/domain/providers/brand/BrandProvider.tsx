import Provider from "../Provider";
import BrandContextType from "./BrandContextType";

export default interface BrandProvider extends Provider<BrandContextType> {
    
}

export const BrandProviderName = "BrandProvider";