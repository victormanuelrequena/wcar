import AllyEntity from "../../../../../domain/entities/AllyEntity";
import AllyImplDto from "../../../../dto/impl/AllyImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllAlliesApiImpl = async (): Promise<AllyEntity[]> => {
    const relativeUrl = "/partners";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((ally: any) => AllyImplDto.fromJson(ally));
    } catch (error) {
        return [];
    }
}

export default GetAllAlliesApiImpl;