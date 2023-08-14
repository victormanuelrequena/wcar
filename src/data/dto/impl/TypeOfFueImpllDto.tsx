import TypeOfFuelEntity from "../../../domain/entities/TypeOfFuelEntity";

const fromJson = (json: string): TypeOfFuelEntity => {
    const _dataParse = (type: string) => {
        switch (type) {
            case 'gasolina':
                return 'Gasolina'
            case 'diesel':
                return 'Diesel'
            case 'gas':
                return 'Gas'
            case 'electrico':
                return 'Electrico'
            case 'hibrido':
                return 'Hibrido'
            default:
                return type;
        }
    }
    return {
        id: json,
        name: _dataParse(json),
    }
}

const toJson = (typeOfFuel: TypeOfFuelEntity): any => typeOfFuel.id;

export default {
    fromJson,
    toJson,
}