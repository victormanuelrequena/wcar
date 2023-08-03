import { injectable } from "inversify";
import BlogPostRepository from "../../../domain/repositories/BlogPostRepository";
import BlogPostEntity from "../../../domain/entities/BlogPostEntity";
import { UserEntityStatus } from "../../../domain/entities/UserEntity";

const _testBlog:BlogPostEntity = {
    id: "1",
    title: "Renault Duster 2023: La SUV perfecta para el mercado colombiano.",
    photoUrl: "/assets/pages/blog/bg_blog_1.jpg",
    tagName: "Technology",
    createdAt: new Date(),
    user: {
        id: "1",
        name: "Juan Pablo",
        phone: "",
        email: "",
        photo: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        status: UserEntityStatus.active,
        permisions: [],
        enabled: true,
    }
}
@injectable()
export default class BlogPostRepositoryTest implements BlogPostRepository{
    async getLastBlogs(): Promise<BlogPostEntity[]> {
        return Array(20).fill(_testBlog);
    }
    async getOutstandingBlog(): Promise<BlogPostEntity> {
        return _testBlog;
    }
}