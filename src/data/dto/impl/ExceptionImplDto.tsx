import ExceptionEntity from "../../../domain/entities/ExceptionEntity";

const fromJson = (json: any): ExceptionEntity => {
    return {
        message: json.message,
        code: json.code,
    }
}

const toJson = (entity: ExceptionEntity): any => {
    return {
        message: entity.message,
        code: entity.code,
    }
}

export default {
    fromJson,
    toJson,
}