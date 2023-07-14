import DepartmentEntity from "../../entities/DepartmentEntity";

type DepartmentContextType = {
  departments: DepartmentEntity[];
  setDepartments: (localization: DepartmentEntity[]) => void;
};


export default DepartmentContextType;