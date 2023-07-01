import Provider from "../Provider";
import ColorContextType from "./ColorContextType";

export default interface ColorProvider extends Provider<ColorContextType> {
    
}

export const ColorProviderName = "ColorProvider";