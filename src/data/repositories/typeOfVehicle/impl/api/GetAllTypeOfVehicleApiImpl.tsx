import TypeVehicleEntity from "../../../../../domain/entities/TypeVehicleEntity";
import TypeVehicleImplDto from "../../../../dto/impl/TypeVehicleImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllTypeOfVehicleApiImpl = async (): Promise<TypeVehicleEntity[]> => {
    const relativeUrl = "/type-cars";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((type: any) => TypeVehicleImplDto.fromJson(type));
    } catch (error) {
        return [];
    }
}

export default GetAllTypeOfVehicleApiImpl;