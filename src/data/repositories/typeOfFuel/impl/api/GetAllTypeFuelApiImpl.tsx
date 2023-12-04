import TypeOfFuelEntity from "../../../../../domain/entities/TypeOfFuelEntity";

const GetAllTypeFuelApiImpl = async (): Promise<TypeOfFuelEntity[]> => {
    try {
        return [
            {
                id: "Gasolina",
                name: "Gasolina",
            },
            {
                id: "Diesel",
                name: "Diésel",
            },
            {
                id: "hibrida",
                name: "Híbrido",
            },
            {
                id: "Electrico",
                name: "Eléctrico",
            },
        ];
    } catch (error) {
        return [];
    }
};

export default GetAllTypeFuelApiImpl;
