import BookDateEntity from "../../../domain/entities/BookDateEntity";
import DateParse from "../../../presentation/utils/DateParse";

const fromJson = (json: any): BookDateEntity => {
    return {
        date: DateParse.dateFromString(json.date),
        available: json.available,
    }
}

const toJson = (entity: BookDateEntity): any => {
    return {
        date: DateParse.stringFromDate(entity.date),
        available: entity.available,
    }
}

export default {
    fromJson,
    toJson,
}