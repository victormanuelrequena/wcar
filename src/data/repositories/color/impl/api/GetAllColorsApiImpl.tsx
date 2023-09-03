import ColorEntity from "../../../../../domain/entities/ColorEntity";
import ColorImplDto from "../../../../dto/impl/ColorImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllColorsApiImpl = async (): Promise<ColorEntity[]> => {
    const relativeUrl = '/colors';
    try {
        const response = await HostApi.get(relativeUrl);
        console.log('GetAllColorsApiImpl', response);
        return response.map((item: any) => ColorImplDto.fromJson(item));
    } catch (error) {
        return [];
    }
}

export default GetAllColorsApiImpl;