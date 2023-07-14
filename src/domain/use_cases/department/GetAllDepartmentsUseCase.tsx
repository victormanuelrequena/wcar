import DepartmentProvider from "../../providers/department/DepartmentProvider";
import DepartmentRepository from "../../repositories/DepartmentRepository";

interface props { departmentRepository: DepartmentRepository, departmentProvider: DepartmentProvider }

export default class GetAllDepartmentsUseCase {

    _departmentRepository: DepartmentRepository;
    _departmentProvider: DepartmentProvider;

    constructor(_: props) {
        this._departmentRepository = _.departmentRepository;
        this._departmentProvider = _.departmentProvider;
    }
    async call() {
        try {
            if (this._departmentProvider.Actions.departments.length > 0) {
                return this._departmentProvider.Actions.departments;
            } else {
                const response = await this._departmentRepository.getAll();
                this._departmentProvider.Actions.setDepartments(response);
                return response;
            }
        } catch (error) {
            throw error;
        }
    }
}