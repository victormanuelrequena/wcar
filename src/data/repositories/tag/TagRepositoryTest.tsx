import { injectable } from "inversify";
import TagRepository from "../../../domain/repositories/TagRepository";
import TagEntity from "../../../domain/entities/TagEntity";

const _tagTest: TagEntity = {
    id: "1",
    name: "new",
    color: "#00FEFE"
};
@injectable()
class TagRepositoryTest implements TagRepository {
    async getAll(): Promise<TagEntity[]> {
        return [_tagTest, _tagTest, _tagTest, _tagTest, _tagTest, _tagTest, _tagTest, _tagTest, _tagTest, _tagTest];
    }
}

export default TagRepositoryTest;