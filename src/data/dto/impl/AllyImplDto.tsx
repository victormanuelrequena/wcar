import AllyEntity from "../../../domain/entities/AllyEntity";

const fromJson = (json: any): AllyEntity => {
    return {
        url_image: json.image,
    }
}

const toJson = (ally: AllyEntity): any => {
    return {
        image: ally.url_image,
    }
}

export default {
    fromJson,
    toJson,
}