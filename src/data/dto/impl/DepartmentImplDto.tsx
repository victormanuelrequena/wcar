import DepartmentEntity from "../../../domain/entities/DepartmentEntity";

//TODO CREATE
const fromJson = (json: any): DepartmentEntity => {
    return {
        id: json.id,
        name: json.name,
    }
}

const toJson = (entity: DepartmentEntity): any => {
    return {
        id: entity.id,
        name: entity.name,
    }
}

export default {
    fromJson,
    toJson,
}