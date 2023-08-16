import BlogPostEntity from "../../../../../domain/entities/BlogPostEntity";
import BlogPostImplDto from "../../../../dto/impl/BlogPostImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetBlogPostByIdApiImpl = async (id: string): Promise<BlogPostEntity | undefined> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(`${relativeUrl}/${id}`);
        return BlogPostImplDto.fromJson(response);
    } catch (error) {
        return undefined;
    }
}

export default GetBlogPostByIdApiImpl;