import CommentEntity from "../../../../../domain/entities/CommentEntity";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllApiImpl = async (): Promise<CommentEntity[]> => {
    const relativeUrl = '';
    try {
        const response = await HostApi.get(relativeUrl);
        return response;
    } catch (error) {
        return [];
    }
}

export default GetAllApiImpl;