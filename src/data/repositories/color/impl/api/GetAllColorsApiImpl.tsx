import ColorEntity from "../../../../../domain/entities/ColorEntity";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllColorsApiImpl = async (): Promise<ColorEntity[]> => {
    const relativeUrl = '';
    try {
        const response = await HostApi.get(relativeUrl);
        return response;
    } catch (error) {
        return [];
    }
}

export default GetAllColorsApiImpl;