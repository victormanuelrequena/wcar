import { injectable } from "inversify";
import BlogPostRepository from "../../repositories/BlogPostRepository";
import BlogPostEntity from "../../entities/BlogPostEntity";

interface props {
    blogPostRepository: BlogPostRepository;
}

@injectable()
export default class GetAllBlogsAndMainPostUseCase {
    _blogPostRepository: BlogPostRepository;

    constructor(_: props) {
        this._blogPostRepository = _.blogPostRepository;
    }

    async call(): Promise<{ blogs: BlogPostEntity[], mainPost: BlogPostEntity | undefined }> {
        let blogs: BlogPostEntity[] = [];
        let mainPost: BlogPostEntity | undefined = undefined;
        try {
            blogs = await this._blogPostRepository.getLastBlogs();
        } catch (error) { }
        try {
            mainPost = await this._blogPostRepository.getOutstandingBlog();
        } catch (error) {
        }
        return { blogs, mainPost };
    }
}