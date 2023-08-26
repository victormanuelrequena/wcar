import TypeVehicleEntity from "../../../domain/entities/TypeVehicleEntity";

const fromJson = (json: any): TypeVehicleEntity => {
    return {
        id: json.id,
        name: json.type,
        photo: json.image,
        count: json.car_count,
    }
}

const toJson = (typeVehicle: TypeVehicleEntity): any => {
    return {
        id: typeVehicle.id,
        type: typeVehicle.name,
        image: typeVehicle.photo,
        car_count: typeVehicle.count,
    }
}

export default {
    fromJson,
    toJson,
}