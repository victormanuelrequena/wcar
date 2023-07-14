import { FC, useState } from "react";
import DepartmentContextType from "../../../domain/providers/department/DepartmentContextType";
import DepartmentEntity from "../../../domain/entities/DepartmentEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import DepartmentContext from "../../../domain/providers/department/DepartmentContext";
import DepartmentProvider from "../../../domain/providers/department/DepartmentProvider";

const _Actions: DepartmentContextType = {
    departments: [],
    setDepartments: (departments: DepartmentEntity[]) => { }
}

const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [departments, setDepartments] = useState<DepartmentEntity[]>([]);
    _Actions.setDepartments = setDepartments;
    _Actions.departments = departments;

    return <DepartmentContext.Provider value={{ departments, setDepartments }}>
        {children}
    </DepartmentContext.Provider>
}

class DepartmentProviderImpl implements DepartmentProvider {
    public context =  DepartmentContext;
    public Actions: DepartmentContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new DepartmentProviderImpl();