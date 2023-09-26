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
                name: 'Diésel',
            },
            {
                id: 'Hibrido',
                name: 'Híbrido',
            }
        ]
    } catch (error) {
        return [];
    }
}

export default GetAllTypeFuelApiImpl;