import CityEntity from "../../../domain/entities/CityEntity";

//TODO CREATE
const fromJson = (json: any): CityEntity => {
    return {
        id: json.id,
        name: json.name,
    }
}

const toJson = (entity: CityEntity): any => {
    return {
        id: entity.id,
        name: entity.name,
    }
}

export default {
    fromJson,
    toJson,
}