import DepartmentEntity from "../entities/DepartmentEntity";

export default interface DepartmentRepository{
    getAll(): Promise<DepartmentEntity[]>;
}

export const DepartmentRepositoryName = "DepartmentRepository";