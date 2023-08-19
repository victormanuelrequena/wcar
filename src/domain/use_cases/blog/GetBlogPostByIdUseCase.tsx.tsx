import { injectable } from "inversify";
import BlogPostRepository from "../../repositories/BlogPostRepository";
import BlogPostEntity from "../../entities/BlogPostEntity";

interface props {
    blogPostRepository: BlogPostRepository;
}

@injectable()
export default class GetBlogPostByIdUseCase {
    _blogPostRepository: BlogPostRepository;

    constructor(_: props) {
        this._blogPostRepository = _.blogPostRepository;
    }

    async call(id: string): Promise<BlogPostEntity | undefined> {
        return await this._blogPostRepository.getBlogById(id);
    }
}

export const GetBlogPostByIdUseCaseName = "GetBlogPostByIdUseCaseName";