import TypeOfFuelEntity from "../../entities/TypeOfFuelEntity";

type TypeOfFuelContextType = {
  typeOfFuels: TypeOfFuelEntity[];
  setTypeOfFuels: (typeOfFuels: TypeOfFuelEntity[]) => void;
};


export default TypeOfFuelContextType;