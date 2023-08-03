import BlogPostEntity from "../entities/BlogPostEntity";

export default interface BlogPostRepository {
    getLastBlogs(): Promise<BlogPostEntity[]>;
    getOutstandingBlog(): Promise<BlogPostEntity>;
}

export const BlogPostRepositoryName = "BlogPostRepository";