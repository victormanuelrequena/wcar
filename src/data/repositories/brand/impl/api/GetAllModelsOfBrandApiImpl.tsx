import ModelEntity from "../../../../../domain/entities/ModelEntity";
import ModelImplDto from "../../../../dto/impl/ModelImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllModelsOfBrandApiImpl = async (brandId: string): Promise<ModelEntity[]> => {
    let relativeUrl = `/brands/${brandId}`;
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((model: any) => ModelImplDto.fromJson(model));
    } catch (error) {
        return [];
    }
}

export default GetAllModelsOfBrandApiImpl;