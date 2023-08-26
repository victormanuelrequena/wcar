import TypeOfFuelEntity from "../../../../../domain/entities/TypeOfFuelEntity";

const GetAllTypeFuelApiImpl = async (): Promise<TypeOfFuelEntity[]> => {
    try {
        return [
            {
                id: '1',
                name: 'Gasolina',
            },
            {
                id: '2',
                name: 'Diesel',
            },
            {
                id: '3',
                name: 'Hibrido',
            }
        ]
    } catch (error) {
        return [];
    }
}

export default GetAllTypeFuelApiImpl;