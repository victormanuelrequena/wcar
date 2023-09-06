import UserEntity, { UserEntityStatus, UserRole } from "../../../domain/entities/UserEntity";

//TODO User Dto
const fromJson = (json: any): UserEntity => {
    return {
        role: json.role == "customer" ? UserRole.CUSTOMER : UserRole.CUSTOMER,
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
        role: entity.role == UserRole.CUSTOMER ? "customer" : "customer",
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