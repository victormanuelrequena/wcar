import CommentEntity from "../entities/CommentEntity";

export default interface CommentRepository {
    getall(): Promise<CommentEntity[]>;
}

export const CommentRepositoryName = "CommentRepository";