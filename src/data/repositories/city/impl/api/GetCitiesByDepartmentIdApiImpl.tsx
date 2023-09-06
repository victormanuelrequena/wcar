import CityEntity from "../../../../../domain/entities/CityEntity";
import CityImplDto from "../../../../dto/impl/CityImplDto";
import HostApi from "../../../../settings/HostApi";

const GetCitiesByDepartmentIdApiImpl = async (departmentId: string): Promise<CityEntity[]> => {
    const relativeUrl = `/departaments/${departmentId}/`;
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((item:any)=> CityImplDto.fromJson(item));
    } catch (error) {
        return [];
    }
}

export default GetCitiesByDepartmentIdApiImpl;