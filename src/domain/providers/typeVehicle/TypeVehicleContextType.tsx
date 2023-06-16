import TypeVehicleEntity from "../../entities/TypeVehicleEntity";

type TypeVehicleContextType = {
  typeVehicles: TypeVehicleEntity[];
  setTypeVehicles: (typeVehicles: TypeVehicleEntity[]) => void;
};


export default TypeVehicleContextType;