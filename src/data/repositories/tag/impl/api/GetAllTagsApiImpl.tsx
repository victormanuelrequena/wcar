import TagEntity from "../../../../../domain/entities/TagEntity";
import TagImplDto from "../../../../dto/impl/TagImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllTagsApiImpl = async (): Promise<TagEntity[]> => {
    const relativeUrl = '/tags';
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((tag: any) => TagImplDto.fromJson(tag));
    }
    catch (error) {
        return [];
    }
}

export default GetAllTagsApiImpl;