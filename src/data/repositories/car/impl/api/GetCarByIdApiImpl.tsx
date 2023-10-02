import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

const GetCarByIdApiImpl = async (id: string): Promise<CarEntity | undefined> => {
    const relativeUrl = `/cars/${id}`;
    try {
        const response = await HostApi.post(relativeUrl, { id });
        return CarImplDto.fromJson(response);
    } catch (error) {
        return undefined;
    }

}

export default GetCarByIdApiImpl;