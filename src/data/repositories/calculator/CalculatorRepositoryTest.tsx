import { injectable } from "inversify";
import CalculatorRepository from "../../../domain/repositories/CalculatorRepository";
import CalculatedEntity from "../../../domain/entities/CalculatedEntity";

const _test:CalculatedEntity = {
    id: "1",
    value: 23323232,
}
@injectable()
export default class CalculatorRepositoryTest implements CalculatorRepository{
    calculateInsurance(name: string, phone: string, email: string, cityId: string, licensePlate: string): Promise<void> {
        return Promise.resolve(undefined);
    }
    calculateCredit(vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<number> {
        return Promise.resolve(320000);
    }
    async calculateOfferForCar(_: any): Promise<CalculatedEntity> {
        return Promise.resolve(_test);
    }
}