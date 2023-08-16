import { Either } from "fp-ts/lib/Either";
import CalculatedEntity from "../entities/CalculatedEntity";
import ExceptionEntity from "../entities/ExceptionEntity";

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
    calculateCredit(vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<Either<ExceptionEntity, number>>;
    calculateInsurance(name:string, phone: string, email: string, cityId: string, licensePlate: string): Promise<Either<ExceptionEntity, void>>;
    calculateOfferForCar(_: CalculateOfferForCarProps): Promise<Either<ExceptionEntity, CalculatedEntity>>;
}

export const CalculatorRepositoryName = 'CalculatorRepository';