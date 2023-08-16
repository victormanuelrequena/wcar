import { injectable } from "inversify";
import CalculatorRepository from "../../../domain/repositories/CalculatorRepository";
import CalculatedEntity from "../../../domain/entities/CalculatedEntity";
import { Either, right } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../domain/entities/ExceptionEntity";

const _test:CalculatedEntity = {
    id: "1",
    value: 23323232,
}
@injectable()
export default class CalculatorRepositoryDev implements CalculatorRepository{
    async calculateInsurance(name: string, phone: string, email: string, cityId: string, licensePlate: string): Promise<Either<ExceptionEntity, void>> {
        return right(undefined);
    }
    async calculateCredit(vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<Either<ExceptionEntity, number>> {
        return right(32000);
    }
    async calculateOfferForCar(_: any): Promise<Either<ExceptionEntity, CalculatedEntity>> {
        return right(_test);
    }
}