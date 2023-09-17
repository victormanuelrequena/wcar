import CommentEntity from "../../../domain/entities/CommentEntity";
import DateParse from "../../../presentation/utils/DateParse";

//TODO CREATE
const fromJson = (json: any): CommentEntity => {
    return {
        id: json.author_url,
        photoUrl: json.profile_photo_url,
        name: json.author_name,
        calification: json.rating,
        content: json.text,
        date: new Date(json.time * 1000),
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