import { injectable } from "inversify";
import TypeVehicleEntity from "../../../domain/entities/TypeVehicleEntity";
import TypeVehicleRepository from "../../../domain/repositories/TypeVehicleRepository";

const _typevehicleTest:TypeVehicleEntity = {
    id:"1",
    name:"Gasolina"
}
@injectable()
class TypeVehicleRepositoryTest implements TypeVehicleRepository {
    async getAll(): Promise<TypeVehicleEntity[]> {
        return [_typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest];
    }
}

export default TypeVehicleRepositoryTest;