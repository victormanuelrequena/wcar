import TypeVehicleEntity from "../../../domain/entities/TypeVehicleEntity";

const fromJson = (json: any): TypeVehicleEntity => {
    return {
        id: json.id,
        name: json.type,
        photo: '/data/typeVehicles/suv.svg',
        count: 340,
        //TODO this is a mock
        // photo: json.photo,
        // count: json.count,
    }
}

const toJson = (typeVehicle: TypeVehicleEntity): any => {
    return {
        id: typeVehicle.id,
        type: typeVehicle.name,
        photo: typeVehicle.photo,
        count: typeVehicle.count,
    }
}

export default {
    fromJson,
    toJson,
}