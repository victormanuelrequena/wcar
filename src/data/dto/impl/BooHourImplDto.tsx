import BookHourEntity from "../../../domain/entities/BookHourEntity";

//TODO CREATE
const fromJson = (json: any): BookHourEntity => {
    return {
        hour: json.hour,
        available: json.available,
    }
}

const toJson = (entity: BookHourEntity): any => {
    return {
        hour: entity.hour,
        available: entity.available,
    }
}

export default {
    fromJson,
    toJson,
}