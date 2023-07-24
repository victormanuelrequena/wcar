import { injectable } from "inversify";
import CommentRepository from "../../../domain/repositories/CommentRepository";
import CommentEntity from "../../../domain/entities/CommentEntity";

const _test:CommentEntity = {
    id: "1",
    photoUrl: "https://picsum.photos/200/300",
    name: "Test",
    calification: 4.5,
    content: "Test content lorem ipsum sads dsmkasl dsklsd lasd",
    date: new Date(),
};

@injectable()
class CommentRepositoryTest implements CommentRepository{
    async getall(): Promise<CommentEntity[]> {
        return [_test];
    }
}

export default CommentRepositoryTest;