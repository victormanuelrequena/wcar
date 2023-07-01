import { FC, useState } from "react";
import ColorContextType from "../../../domain/providers/color/ColorContextType";
import ColorEntity from "../../../domain/entities/ColorEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import ColorContext from "../../../domain/providers/color/ColorContext";
import ColorProvider from "../../../domain/providers/color/ColorProvider";

const _Actions: ColorContextType = {
    colors: [],
    setColors: (colors: ColorEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [colors, setColors] = useState<ColorEntity[]>([]);
    _Actions.setColors = setColors;
    _Actions.colors = colors;

    return <ColorContext.Provider value={{ colors, setColors }}>
        {children}
    </ColorContext.Provider>
}

class ColorProviderImpl implements ColorProvider {
    public context =  ColorContext;
    public Actions: ColorContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new ColorProviderImpl();