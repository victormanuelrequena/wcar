/********************************************************************************
 * File Header - BlogPostRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the BlogPostRepository.
 * The posts are the notices that are shown in the blog page.
 ********************************************************************************/
import BlogPostEntity from "../entities/BlogPostEntity";

export default interface BlogPostRepository {
    getLastBlogs(): Promise<BlogPostEntity[]>;
    getOutstandingBlog(): Promise<BlogPostEntity | undefined>;
    getBlogById(id: string): Promise<BlogPostEntity | undefined>;
}

export const BlogPostRepositoryName = "BlogPostRepository";
