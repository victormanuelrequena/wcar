import UserAccountEntity from "../../../domain/entities/UserAccountEntity";

//TODO CREATE
const fromJson = (json: any): UserAccountEntity => {
    return {
        id: json.id,
        name: json.name,
        phone: json.phone,
        email: json.email,
        enabled: json.enabled,
    }
}

const toJson = (userAccount: UserAccountEntity): any => {
    return {
        id: userAccount.id,
        name: userAccount.name,
        phone: userAccount.phone,
        email: userAccount.email,
        enabled: userAccount.enabled,
    }
}

export default {
    fromJson,
    toJson,
}