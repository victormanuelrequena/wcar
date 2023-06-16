import BrandEntity from "../../entities/BrandEntity";

type BrandContextType = {
  brands: BrandEntity[];
  setBrands: (localization: BrandEntity[]) => void;
};


export default BrandContextType;