import { injectable } from "inversify";
import BlogPostRepository from "../../repositories/BlogPostRepository";
import BlogPostEntity from "../../entities/BlogPostEntity";
import BlogPostImplDto from "../../../data/dto/impl/BlogPostImplDto";
import HostApi from "../../../data/settings/HostApi";

interface props {
    blogPostRepository: BlogPostRepository;
}

@injectable()
export default class GetAllBlogsAndMainPostUseCase {
    _blogPostRepository: BlogPostRepository;

    constructor(_: props) {
        this._blogPostRepository = _.blogPostRepository;
    }

    async call(): Promise<{ blogs: BlogPostEntity[]; mainPost: BlogPostEntity | undefined }> {
        let blogs: BlogPostEntity[] = [];
        let mainPost: BlogPostEntity | undefined = undefined;
        try {
        } catch (error) {
            console.log(error);
        }
        return { blogs, mainPost };
    }
}

export const GetAllBlogsAndMainPostUseCaseName = "GetAllBlogsAndMainPostUseCaseName";
