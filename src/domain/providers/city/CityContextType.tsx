import CityEntity from "../../entities/CityEntity";

type CityContextType = {
  cities: CityEntity[];
  setCities: (localization: CityEntity[]) => void;
};


export default CityContextType;