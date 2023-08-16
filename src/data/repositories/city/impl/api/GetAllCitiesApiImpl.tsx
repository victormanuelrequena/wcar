import CityEntity from "../../../../../domain/entities/CityEntity";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllCitiesApiImpl = async (): Promise<CityEntity[]> => {
    const relativeUrl = '';
    try {
        const response = await HostApi.get(relativeUrl);
        return response;
    } catch (error) {
        return [];
    }
}

export default GetAllCitiesApiImpl;