import { injectable } from "inversify";
import CommentRepository from "../../../domain/repositories/CommentRepository";
import CommentEntity from "../../../domain/entities/CommentEntity";

const _test:CommentEntity = {
    id: "1",
    photoUrl: "https://picsum.photos/200/300",
    name: "Test",
    calification: 3.5,
    content: "Oscar de WCAR, nos guió en todo el proceso de retoma y compra de nuestro vehículo, muy ágiles y transparentes, siempre disponibles para resolver nuestras dudas.",
    date: new Date(),
};

@injectable()
class CommentRepositoryTest implements CommentRepository{
    async getall(): Promise<CommentEntity[]> {
        return [_test, _test, _test, _test, _test];
    }
}

export default CommentRepositoryTest;