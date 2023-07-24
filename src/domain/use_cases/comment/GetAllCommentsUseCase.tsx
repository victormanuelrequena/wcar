import { injectable } from "inversify";
import CommentRepository from "../../repositories/CommentRepository";

interface props {
    commentRepository: CommentRepository;
}
@injectable()
export default class GetAllCommentsUseCase {
    _commentRepository: CommentRepository;

    constructor(_:props) {
        this._commentRepository = _.commentRepository;
    }

    async call() {
        return await this._commentRepository.getall();
    }
}