import AllyEntity from "../../entities/AllyEntity";

type AllyContextType = {
  allies: AllyEntity[];
  setAllies: (localization: AllyEntity[]) => void;
};


export default AllyContextType;