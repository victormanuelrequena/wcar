import TypeOfFuelEntity from "../../../../../domain/entities/TypeOfFuelEntity";

const GetAllTypeFuelApiImpl = async (): Promise<TypeOfFuelEntity[]> => {
    try {
        return [
            {
                id: 'Gasolina',
                name: 'Gasolina',
            },
            {
                id: 'Diesel',
                name: 'Diesel',
            },
            {
                id: 'Hibrido',
                name: 'Hibrido',
            }
        ]
    } catch (error) {
        return [];
    }
}

export default GetAllTypeFuelApiImpl;