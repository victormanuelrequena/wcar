import Provider from "../Provider";
import FavoriteCarsContextType from "./FavoriteCarsContextType";

export default interface FavoriteCarsProvider extends Provider<FavoriteCarsContextType> {
}

export const FavoriteCarsProviderName = "FavoriteCarsProvider";