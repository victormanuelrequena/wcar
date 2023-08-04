import BlogPostEntity from "../entities/BlogPostEntity";

export default interface BlogPostRepository {
    getLastBlogs(): Promise<BlogPostEntity[]>;
    getOutstandingBlog(): Promise<BlogPostEntity>;
    getBlogById(id: string): Promise<BlogPostEntity>;
}

export const BlogPostRepositoryName = "BlogPostRepository";