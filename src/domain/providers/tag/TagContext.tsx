import React from "react";
import TagEntity from "../../entities/TagEntity";
import TagContextType from "./TagContextType";

const TagContext = React.createContext<TagContextType>({
    tags: [],
    setTags: (tags: TagEntity[]) => {}
});

export default TagContext;