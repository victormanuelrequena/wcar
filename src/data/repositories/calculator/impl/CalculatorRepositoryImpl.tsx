import { injectable } from "inversify";
import CalculatorRepository from "../../../../domain/repositories/CalculatorRepository";
import CalculatedEntity from "../../../../domain/entities/CalculatedEntity";
import CalculateInsurance from "./api/CalculateInsuranceApiImpl";
import CalculateCreditApiImpl from "./api/CalculateCreditApiImpl";
import CalculateOfferForCarApiImpl from "./api/CalculateOfferForCarApiImpl";
import { Either } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../domain/entities/ExceptionEntity";

@injectable()
export default class CalculatorRepositoryImpl implements CalculatorRepository {
    calculateInsurance = (name: string, phone: string, email: string, cityId: string, licensePlate: string): Promise<Either<ExceptionEntity, void>> => CalculateInsurance(name, phone, email, cityId, licensePlate);
    calculateCredit = (vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<Either<ExceptionEntity, number>> => CalculateCreditApiImpl(vehicleValue, initialQuote, months, insuranceId);
    calculateOfferForCar = (_: any): Promise<Either<ExceptionEntity, CalculatedEntity>> => CalculateOfferForCarApiImpl(_);
}