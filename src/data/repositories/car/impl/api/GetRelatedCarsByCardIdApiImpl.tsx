import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetRelatedCarsByCardIdApiImpl = async (id: string): Promise<CarEntity[]> => {
    const relativeUrl = "/brands";
    try {
        const response = await HostApi.post(relativeUrl, { id });
        return response.map((car: any) => CarImplDto.fromJson(car));
    } catch (error) {
        return [];
    }

}

export default GetRelatedCarsByCardIdApiImpl;