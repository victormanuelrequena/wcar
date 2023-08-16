import TagEntity from "../../../domain/entities/TagEntity";

//TODO CREATE
const fromJson = (json: any): TagEntity => {
    return {
        id: json.id,
        name: json.tag,
        color: json.color,
        description: json.description,
    }
}

const toJson = (tag: TagEntity): any => {
    return {
        id: tag.id,
        tag: tag.name,
        color: tag.color,
        description: tag.description,
    }
}

export default {
    fromJson,
    toJson,
}