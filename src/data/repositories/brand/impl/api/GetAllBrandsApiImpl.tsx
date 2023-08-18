import BrandEntity from "../../../../../domain/entities/BrandEntity";
import BrandImplDto from "../../../../dto/impl/BrandImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllBrandsApiImpl = async (): Promise<BrandEntity[]> => {
    const relativeUrl = "/brands";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((brand: any) => BrandImplDto.fromJson(brand));
    } catch (error) {
        return [];
    }
}

export default GetAllBrandsApiImpl;