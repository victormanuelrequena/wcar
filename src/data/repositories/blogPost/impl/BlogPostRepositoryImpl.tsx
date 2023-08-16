import { injectable } from "inversify";
import BlogPostRepository from "../../../../domain/repositories/BlogPostRepository";
import BlogPostEntity from "../../../../domain/entities/BlogPostEntity";
import GetLastBlogsApiImpl from "./api/GetLastBlogsApiImpl";
import GetOustandingBlogApiImpl from "./api/GetOustandingBlogApiImpl";
import GetBlogPostByIdApiImpl from "./api/GetBlogPostByIdApiImpl";

@injectable()
export default class BlogPostRepositoryImpl implements BlogPostRepository {
    getLastBlogs = (): Promise<BlogPostEntity[]> => GetLastBlogsApiImpl();
    getOutstandingBlog = (): Promise<BlogPostEntity | undefined> => GetOustandingBlogApiImpl();
    getBlogById = (id: string): Promise<BlogPostEntity | undefined> => GetBlogPostByIdApiImpl(id);
}