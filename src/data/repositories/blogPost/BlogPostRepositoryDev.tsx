import { injectable } from "inversify";
import BlogPostRepository from "../../../domain/repositories/BlogPostRepository";
import BlogPostEntity from "../../../domain/entities/BlogPostEntity";
import { UserEntityStatus, UserRole } from "../../../domain/entities/UserEntity";
import sleeper from "../../../domain/repositories/utils/Sleeper";

const _testBlog:BlogPostEntity = {
    id: "1",
    title: "Renault Duster 2023: La SUV perfecta para el mercado colombiano.",
    photoUrl: "/assets/pages/blog/bg_blog_1.jpg",
    tagName: "Technology",
    createdAt: new Date(),
    content: "<p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p> <aside>\"Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.\"</aside> <img src=\"/assets/pages/blog/bg_blog_1.jpg\" alt=\"\" /> <h5>Pack Lightly and Smartly</h5> <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p> <h5>Stay Safe and Healthy</h5> <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>",
    user: {
        id: "1",
        name: "Juan Pablo",
        phone: "",
        email: "",
        photo: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        status: UserEntityStatus.active,
        role: UserRole.CUSTOMER,
        enabled: true,
    }
}
@injectable()
export default class BlogPostRepositoryDev implements BlogPostRepository{
    async getLastBlogs(): Promise<BlogPostEntity[]> {
        await sleeper(1000)(1);
        return Array(20).fill(_testBlog);
    }
    async getOutstandingBlog(): Promise<BlogPostEntity | undefined> {
        await sleeper(1000)(1);
        return _testBlog;
    }
    async getBlogById(id: string): Promise<BlogPostEntity | undefined> {
        await sleeper(1000)(1);
        return _testBlog;
    }
}