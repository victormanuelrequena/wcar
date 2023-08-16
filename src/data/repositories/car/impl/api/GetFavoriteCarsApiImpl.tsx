import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetFavoriteCarsApiImpl = async (): Promise<CarEntity[]> => {
    const relativeUrl = "/cars/favorites";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((car: any) => CarImplDto.fromJson(car));
    } catch (error) {
        return [];
    }

}

export default GetFavoriteCarsApiImpl;