import DepartmentEntity from "../../../../domain/entities/DepartmentEntity";
import DepartmentRepository from "../../../../domain/repositories/DepartmentRepository";
import GetAllDepartmentsApiImpl from "./api/GetAllDepartmentsApiImpl";

export default class DepartmentRepositoryImpl implements DepartmentRepository{
    getAll = (): Promise<DepartmentEntity[]> => GetAllDepartmentsApiImpl();

} 