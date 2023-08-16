import BlogPostEntity from "../entities/BlogPostEntity";

export default interface BlogPostRepository {
    getLastBlogs(): Promise<BlogPostEntity[]>;
    getOutstandingBlog(): Promise<BlogPostEntity | undefined>;
    getBlogById(id: string): Promise<BlogPostEntity | undefined>;
}

export const BlogPostRepositoryName = "BlogPostRepository";