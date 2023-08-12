import { FC, useState } from "react";
import TagContextType from "../../../domain/providers/tag/TagContextType";
import TagEntity from "../../../domain/entities/TagEntity";
import ProviderProps from "../../../domain/providers/ProviderProps";
import TagContext from "../../../domain/providers/tag/TagContext";
import TagProvider from "../../../domain/providers/tag/TagProvider";

const _Actions: TagContextType = {
    tags: [],
    setTags: (tags: TagEntity[]) => { }
}
const _Provider: FC<ProviderProps> = ({ children }) => { 
    const [tags, setTags] = useState<TagEntity[]>([]);
    _Actions.setTags = setTags;
    _Actions.tags = tags;

    return <TagContext.Provider value={{ tags, setTags }}>
        {children}
    </TagContext.Provider>
}

class TagProviderImpl implements TagProvider {
    public context =  TagContext;
    public Actions: TagContextType = _Actions;
    public Provider: FC<ProviderProps> = _Provider;
}

export default new TagProviderImpl();