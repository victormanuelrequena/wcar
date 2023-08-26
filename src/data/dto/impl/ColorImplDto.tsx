import ColorEntity from "../../../domain/entities/ColorEntity";

const fromJson = (json: any): ColorEntity => {
    return {
        id: json.id,
        name: json.color,
        colorHex: json.hex,
    }
}

const toJson = (color: ColorEntity): any => {
    return {
        id: color.id,
        color: color.name,
        hex: color.colorHex,
    }
}

export default {
    fromJson,
    toJson,
}
