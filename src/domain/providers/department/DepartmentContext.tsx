import React from "react";
import DepartmentContextType from "./DepartmentContextType";
import DepartmentEntity from "../../entities/DepartmentEntity";

const DepartmentContext = React.createContext<DepartmentContextType>({
    departments: [],
    setDepartments: (departments: DepartmentEntity[]) => {}
});

export default DepartmentContext;