import DepartmentEntity from "../../../../../domain/entities/DepartmentEntity";
import DepartmentImplDto from "../../../../dto/impl/DepartmentImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllDepartmentsApiImpl = async (): Promise<DepartmentEntity[]> => {
    const relativeUrl = "/departments";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((item: any) => DepartmentImplDto.fromJson(item));
    } catch (error) {
        return [];
    }
}

export default GetAllDepartmentsApiImpl;