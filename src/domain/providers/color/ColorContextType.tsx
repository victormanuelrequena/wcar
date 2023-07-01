import ColorEntity from "../../entities/ColorEntity";

type ColorContextType = {
  colors: ColorEntity[];
  setColors: (localization: ColorEntity[]) => void;
};


export default ColorContextType;