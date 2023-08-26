import CityEntity from "../../../../../domain/entities/CityEntity";
import CityImplDto from "../../../../dto/impl/CityImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllCitiesApiImpl = async (): Promise<CityEntity[]> => {
    const relativeUrl = '/cities';
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((item:any)=> CityImplDto.fromJson(item));
    } catch (error) {
        return [];
    }
}

export default GetAllCitiesApiImpl;