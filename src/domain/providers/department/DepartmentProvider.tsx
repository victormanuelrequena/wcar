import Provider from "../Provider";
import DepartmentContextType from "./DepartmentContextType";

export default interface DepartmentProvider extends Provider<DepartmentContextType> {
    
}

export const DepartmentProviderName = "DepartmentProvider";