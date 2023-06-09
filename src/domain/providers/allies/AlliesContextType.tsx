import AllyEntity from "../../entities/AllyEntity";

type AlliesContextType = {
  allies: AllyEntity[];
  setAllies: (localization: AllyEntity[]) => void;
};


export default AlliesContextType;