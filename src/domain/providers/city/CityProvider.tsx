import Provider from "../Provider";
import CityContextType from "./CityContextType";

export default interface CityProvider extends Provider<CityContextType> {
    
}

export const CityProviderName = "CityProvider";