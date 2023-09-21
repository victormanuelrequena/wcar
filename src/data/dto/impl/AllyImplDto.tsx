import AllyEntity from "../../../domain/entities/AllyEntity";

const fromJson = (json: any): AllyEntity => {
    return {
        url_image: json.image,
        id: json.partner,
    }
}

const toJson = (ally: AllyEntity): any => {
    return {
        image: ally.url_image,
        partner: ally.id,
    }
}

export default {
    fromJson,
    toJson,
}