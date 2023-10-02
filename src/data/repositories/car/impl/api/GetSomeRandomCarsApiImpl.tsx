import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

const GetSomeRandomCarsApiImpl = async (): Promise<CarEntity[]> => {
    const relativeUrl = "/cars/";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.results.map((car: any) => CarImplDto.fromJson(car));
    } catch (error) {
        return [];
    }

}

export default GetSomeRandomCarsApiImpl;