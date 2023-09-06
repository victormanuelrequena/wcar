import DepartmentEntity from "../../../../../domain/entities/DepartmentEntity";
import DepartmentImplDto from "../../../../dto/impl/DepartmentImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllDepartmentsApiImpl = async (): Promise<DepartmentEntity[]> => {
    const relativeUrl = "/departaments/";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((item: any) => DepartmentImplDto.fromJson(item));
    } catch (error) {
        return [];
    }
}

export default GetAllDepartmentsApiImpl;