import ModelEntity from "../../../domain/entities/ModelEntity";

const fromJson = (model: any): ModelEntity => {
    return {
        id: model.id,
        name: model.model,
    }
}

const toJson = (model: ModelEntity): any => {
    return {
        id: model.id,
        model: model.name,
    }
}

export default {
    fromJson,
    toJson,
}