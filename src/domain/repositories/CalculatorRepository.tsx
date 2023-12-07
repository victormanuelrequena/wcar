/********************************************************************************
 * File Header - CalculatorRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the CalculatorRepository.
 * The calculatedEntity is the entity that contains the calculated values for the car.
 ********************************************************************************/

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
    };
    car: {
        year: number;
        brandId: string;
        model: string;
        version: string;
        kilometers: number;
        cityId: string;
        departmentId: string;
        colorId: string;
    };
    book: {
        dateId: string;
        hourId: string;
    };
}
export default interface CalculatorRepository {
    calculateCredit(
        vehicleValue: number,
        initialQuote: number,
        months: number,
        insurance: number
    ): Promise<Either<ExceptionEntity, number>>;
    calculateInsurance(
        name: string,
        phone: string,
        email: string,
        cityId: string,
        licensePlate: string,
        whatsApp: boolean
    ): Promise<Either<ExceptionEntity, void>>;
    calculateOfferForCar(_: CalculateOfferForCarProps): Promise<Either<ExceptionEntity, CalculatedEntity>>;
}

export const CalculatorRepositoryName = "CalculatorRepository";
