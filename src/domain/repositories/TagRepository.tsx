import TagEntity from "../entities/TagEntity";

export default interface TagRepository{
    getAll(): Promise<TagEntity[]>;
}