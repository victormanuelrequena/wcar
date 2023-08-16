import TypeOfFuelEntity from "../../../../../domain/entities/TypeOfFuelEntity";
import TypeOfFueImpllDto from "../../../../dto/impl/TypeOfFueImpllDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllTypeFuelApiImpl = async (): Promise<TypeOfFuelEntity[]> => {
    const relativeUrl = '/typeFuel';
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((type:any) => TypeOfFueImpllDto.fromJson(type));
    } catch (error) {
        return [];
    }
}

export default GetAllTypeFuelApiImpl;