import VersionModelEntity from "../../../../../domain/entities/VersionModelEntity";
import VersionModelImplDto from "../../../../dto/impl/VersionModelImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllVersionOfModelsApiImpl = async (brandId: string, modelId: string): Promise<VersionModelEntity[]> => {
    let relativeUrl = `/models/${modelId}/${brandId}`;
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((_: any) => VersionModelImplDto.fromJson(_));
    } catch (error) {
        return [];
    }
}

export default GetAllVersionOfModelsApiImpl;