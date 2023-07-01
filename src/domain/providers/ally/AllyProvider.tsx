import Provider from "../Provider";
import AllyContextType from "./AllyContextType";

export default interface AllyProvider extends Provider<AllyContextType> {
    
}

export const AllyProviderName = "AllyProvider";