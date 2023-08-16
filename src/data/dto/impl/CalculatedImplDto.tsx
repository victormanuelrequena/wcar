import CalculatedEntity from "../../../domain/entities/CalculatedEntity";

//TODO CREATE
const fromJson = (json: any): CalculatedEntity => {
    return {
        id: json.id,
        value: json.value,
    }
}

const toJson = (entity: CalculatedEntity): any => {
    return {
        id: entity.id,
        value: entity.value,
    }
}

export default {
    fromJson,
    toJson,
}