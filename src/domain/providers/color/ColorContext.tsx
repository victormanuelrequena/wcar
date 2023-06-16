import React from "react";
import ColorContextType from "./ColorContextType";
import ColorEntity from "../../entities/ColorEntity";

const ColorContext = React.createContext<ColorContextType>({
    colors: [],
    setColors: (colors: ColorEntity[]) => {}
});

export default ColorContext;