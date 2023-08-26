import CityEntity from "../../../domain/entities/CityEntity";

const fromJson = (json: any): CityEntity => {
    return {
        id: json.id,
        name: json.city,
    }
}

const toJson = (entity: CityEntity): any => {
    return {
        id: entity.id,
        city: entity.name,
    }
}

export default {
    fromJson,
    toJson,
}