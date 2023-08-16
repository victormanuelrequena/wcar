import { injectable } from "inversify";
import GetAllTagsApiImpl from "./api/GetAllTagsApiImpl";
import TagRepository from "../../../../domain/repositories/TagRepository";
import TagEntity from "../../../../domain/entities/TagEntity";

const _tagTest: TagEntity = {
    id: "1",
    name: "new",
    color: "#00FEFE",
    description: "new",
};
@injectable()
class TagRepositoryImpl implements TagRepository {
    getAll = (): Promise<TagEntity[]> => GetAllTagsApiImpl();
}

export default TagRepositoryImpl;