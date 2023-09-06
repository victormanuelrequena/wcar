import { injectable } from "inversify";
import DepartmentEntity from "../../../../domain/entities/DepartmentEntity";
import DepartmentRepository from "../../../../domain/repositories/DepartmentRepository";
import GetAllDepartmentsApiImpl from "./api/GetAllDepartmentsApiImpl";

@injectable()
export default class DepartmentRepositoryImpl implements DepartmentRepository{
    getAll = (): Promise<DepartmentEntity[]> => GetAllDepartmentsApiImpl();

} 