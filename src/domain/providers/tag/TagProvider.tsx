import Provider from "../Provider";
import TagContextType from "./TagContextType";

export default interface TagProvider extends Provider<TagContextType> {
    
}

export const TagProviderName = "TagProvider";