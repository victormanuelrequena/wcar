import { injectable } from "inversify";
import DepartmentRepository from "../../../domain/repositories/DepartmentRepository";
import DepartmentEntity from "../../../domain/entities/DepartmentEntity";

const _departmentTest:DepartmentEntity = {
    id:"1",
    name:"Rojo"
}
@injectable()
class DepartmentRepositoryDev implements DepartmentRepository{
    async getAll(): Promise<DepartmentEntity[]> {
        return [_departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest, _departmentTest];
    }
}

export default DepartmentRepositoryDev;