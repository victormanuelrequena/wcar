import { injectable } from "inversify";
import TagProvider from "../../providers/tag/TagProvider";
import TagRepository from "../../repositories/TagRepository";

interface props {
    tagRepository: TagRepository;
    tagProvider: TagProvider;
}

@injectable()
export default class GetAllTagsUseCase {
    _tagRepository: TagRepository;
    _tagProvider: TagProvider;

    constructor(_: props) {
        this._tagRepository = _.tagRepository;
        this._tagProvider = _.tagProvider;
    }
    async call() {
        try {
            if(this._tagProvider.Actions.tags.length > 0) return this._tagProvider.Actions.tags;
            const response = await this._tagRepository.getAll();
            this._tagProvider.Actions.setTags(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}
    