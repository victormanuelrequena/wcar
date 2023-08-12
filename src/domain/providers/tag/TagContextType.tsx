import TagEntity from "../../entities/TagEntity";

type TagContextType = {
  tags: TagEntity[];
  setTags: (localization: TagEntity[]) => void;
};


export default TagContextType;