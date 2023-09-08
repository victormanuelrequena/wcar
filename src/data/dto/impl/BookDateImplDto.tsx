import BookDateEntity from "../../../domain/entities/BookDateEntity";
import DateParse from "../../../presentation/utils/DateParse";

//TODO CREATE
const fromJson = (json: any): BookDateEntity => {
    return {
        id: json.id,
        date: DateParse.dateFromString(json.date),
        available: true,
    }
}

const toJson = (entity: BookDateEntity): any => {
    return {
        id: entity.id,
        date: DateParse.stringFromDate(entity.date),
        available: entity.available,
    }
}

export default {
    fromJson,
    toJson,
}