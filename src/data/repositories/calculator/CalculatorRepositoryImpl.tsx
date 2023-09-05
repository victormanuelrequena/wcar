import { injectable } from "inversify";
import CalculatorRepository, { CalculateOfferForCarProps } from "../../../domain/repositories/CalculatorRepository";
import CalculatedEntity from "../../../domain/entities/CalculatedEntity";
import CalculateInsurance from "./impl/api/CalculateInsuranceApiImpl";
import CalculateCreditApiImpl from "./impl/api/CalculateCreditApiImpl";
import CalculateOfferForCarApiImpl from "./impl/api/CalculateOfferForCarApiImpl";
import { Either } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../domain/entities/ExceptionEntity";

@injectable()
export default class CalculatorRepositoryImpl implements CalculatorRepository {
    calculateInsurance = (name: string, phone: string, email: string, cityId: string, licensePlate: string, whatsApp: boolean): Promise<Either<ExceptionEntity, void>> => CalculateInsurance(name, phone, email, cityId, licensePlate, whatsApp);
    calculateCredit = (vehicleValue: number, initialQuote: number, months: number, insurance: number): Promise<Either<ExceptionEntity, number>> => CalculateCreditApiImpl(vehicleValue, initialQuote, months, insurance);
    calculateOfferForCar = (_: CalculateOfferForCarProps): Promise<Either<ExceptionEntity, CalculatedEntity>> => CalculateOfferForCarApiImpl(_);
}