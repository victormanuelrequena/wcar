import { injectable } from "inversify";
import TypeVehicleEntity from "../../../domain/entities/TypeVehicleEntity";
import TypeVehicleRepository from "../../../domain/repositories/TypeVehicleRepository";

const _typevehicleTest:TypeVehicleEntity = {
    id:"1",
    name:"SUV",
    photo: '/data/typeVehicles/suv.svg',
    count: 340,
}

@injectable()
class TypeVehicleRepositoryTest implements TypeVehicleRepository {
    async getAll(): Promise<TypeVehicleEntity[]> {
        console.log('is getting this', _typevehicleTest);
        return [_typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest, _typevehicleTest];
    }
}

export default TypeVehicleRepositoryTest;