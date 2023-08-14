import ColorEntity from "../../../domain/entities/ColorEntity";

const fromJson = (json: any): ColorEntity => {
    //TODO change to real
    return {
        id: json,
        name: json,
        colorHex: json,
    }
    return {
        id: json.colorHex,
        name: json.color,
        colorHex: json.colorHex,
    }
}

const toJson = (color: ColorEntity): any => {
    return {
        id: color.colorHex,
        color: color.name,
        colorHex: color.colorHex,
    }
}

export default {
    fromJson,
    toJson,
}
