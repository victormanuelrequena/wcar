// import BlogPostEntity from "../../../../../domain/entities/BlogPostEntity";
import BlogPostImplDto from "../../../../dto/impl/BlogPostImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetLastBlogsApiImpl = async (): Promise<any> => {
    const relativeUrl = "/post";
    try {
        const response = await HostApi.get(relativeUrl);
        console.log("🚀 ~ file: GetLastBlogsApiImpl.tsx:10 ~ GetLastBlogsApiImpl ~ response:", response);
        return response?.blogs?.map((blog: any) => BlogPostImplDto.fromJson(blog));
        // return {
        //     blogs: response.blogs.map((blog: any) => BlogPostImplDto.fromJson(blog)),
        //     mainPost: BlogPostImplDto.fromJson(response.main_post),
        // };
    } catch (error) {
        return [];
    }
};

export default GetLastBlogsApiImpl;
