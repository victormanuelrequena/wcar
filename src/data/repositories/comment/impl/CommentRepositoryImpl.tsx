import { injectable } from "inversify";
import CommentEntity from "../../../../domain/entities/CommentEntity";
import CommentRepository from "../../../../domain/repositories/CommentRepository";
import GetAllApiImpl from "./api/GetAllCommentApiImpl";

@injectable()
export default class CommentRepositoryDev implements CommentRepository{
    getall = (): Promise<CommentEntity[]> => GetAllApiImpl();
}