import BlogPostEntity from "../../../../../domain/entities/BlogPostEntity";
import BlogPostImplDto from "../../../../dto/impl/BlogPostImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetLastBlogsApiImpl = async (): Promise<BlogPostEntity[]> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((blog: any) => BlogPostImplDto.fromJson(blog));
    } catch (error) {
        return [];
    }
}

export default GetLastBlogsApiImpl;