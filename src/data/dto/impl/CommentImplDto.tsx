import CommentEntity from "../../../domain/entities/CommentEntity";
import DateParse from "../../../presentation/utils/DateParse";

//TODO CREATE
const fromJson = (json: any): CommentEntity => {
    return {
        id: json.id,
        photoUrl: json.photoUrl,
        name: json.name,
        calification: json.calification,
        content: json.content,
        date: DateParse.dateFromString(json.date),
    }
}

const toJson = (entity: CommentEntity): any => {
    return {
        id: entity.id,
        photoUrl: entity.photoUrl,
        name: entity.name,
        calification: entity.calification,
        content: entity.content,
        date: DateParse.stringFromDate(entity.date),
    }
}

export default {
    fromJson,
    toJson,
}