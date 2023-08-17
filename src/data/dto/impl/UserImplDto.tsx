import UserEntity, { UserEntityStatus } from "../../../domain/entities/UserEntity";

//TODO User Dto
const fromJson = (json: any): UserEntity => {
    return {
        permisions: json.permisions,
        status: UserEntityStatus.active,
        photo: json.photo,
        id: json.id,
        name: json.name,
        phone: json.phone,
        email: json.email,
        enabled: true,
    }
}

const toJson = (entity: UserEntity): any => {
    return {
        permisions: entity.permisions,
        status: entity.status,
        photo: entity.photo,
        id: entity.id,
        name: entity.name,
        phone: entity.phone,
        email: entity.email,
        enabled: entity.enabled,
    }
}

export default {
    fromJson,
    toJson
}