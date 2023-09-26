import CommentEntity from "../../../../../domain/entities/CommentEntity";
import CommentImplDto from "../../../../dto/impl/CommentImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllApiImpl = async (): Promise<CommentEntity[]> => {
    const relativeUrl = '/map/';
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((item: any) => CommentImplDto.fromJson(item)).filter((item: CommentEntity) => item.calification > 3);
    } catch (error) {
        return [];
    }
}

export default GetAllApiImpl;