import TypeOfFuelEntity from "../../../domain/entities/TypeOfFuelEntity";

const fromJson = (json: string): TypeOfFuelEntity => {
    const _dataParse = (type: string) => {
        switch (type) {
            case 'gasolina':
                return 'Gasolina'
            case 'diesel':
                return 'Diésel'
            case 'gas':
                return 'Gas'
            case 'electrico':
                return 'Electrico'
            case 'hibrido':
                return 'Híbrido'
            default:
                return type;
        }
    }
    return {
        id: json,
        name: _dataParse(json),
    }
}

const toJson = (typeOfFuel: TypeOfFuelEntity): string => {
    const _dataParse = (type: string) => {
        switch (type) {
            case 'Gasolina':
                return 'gasolina'
            case 'Diésel':
                return 'diesel'
            case 'Gas':
                return 'gas'
            case 'Electrico':
                return 'electrico'
            case 'Híbrido':
                return 'hibrido'
            default:
                return type;
        }
    }
    return _dataParse(typeOfFuel.name)
}

export default {
    fromJson,
    toJson,
}