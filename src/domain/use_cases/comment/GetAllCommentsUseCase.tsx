import { injectable } from "inversify";
import CommentRepository from "../../repositories/CommentRepository";
import CommentEntity from "../../entities/CommentEntity";

interface props {
    commentRepository: CommentRepository;
}
@injectable()
export default class GetAllCommentsUseCase {
    _commentRepository: CommentRepository;

    constructor(_:props) {
        this._commentRepository = _.commentRepository;
    }

    async call(): Promise<CommentEntity[]> {
        return await this._commentRepository.getall();
    }
}

export const GetAllCommentsUseCaseName = "GetAllCommentsUseCaseName";