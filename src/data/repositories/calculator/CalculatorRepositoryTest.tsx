import { injectable } from "inversify";
import CalculatorRepository from "../../../domain/repositories/CalculatorRepository";
import CalculatedEntity from "../../../domain/entities/CalculatedEntity";

const _test:CalculatedEntity = {
    id: "1",
    value: 23323232,
}
@injectable()
export default class CalculatorRepositoryTest implements CalculatorRepository{
    async calculateOfferForCar(_: any): Promise<CalculatedEntity> {
        return Promise.resolve(_test);
    }
}