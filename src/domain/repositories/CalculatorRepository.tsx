import CalculatedEntity from "../entities/CalculatedEntity";

export interface CalculateOfferForCarProps {
    contact: {
        name: string;
        lastname: string;
        email: string;
        phone: string;
        companyName: string | undefined;
    }, car: {
        year: number;
        brandId: string;
        model: string;
        version: string;
        kilometers: number;
        cityId: string;
        colorId: string;
    }
}
export default interface CalculatorRepository {
    // calculateCredit(): Promise<void>;
    calculateOfferForCar(_: CalculateOfferForCarProps): Promise<CalculatedEntity>;
}

export const CalculatorRepositoryName = 'CalculatorRepository';