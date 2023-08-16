import { injectable } from "inversify";
import TypeOfFuelRepository from "../../../domain/repositories/TypeOfFuelRepository";
import TypeOfFuelEntity from "../../../domain/entities/TypeOfFuelEntity";

const _typeoffuelTest:TypeOfFuelEntity = {
    id:"1",
    name:"Gasolina"
}
@injectable()
class TypeOfFuelRepositoryDev implements TypeOfFuelRepository{
    async getAll(): Promise<TypeOfFuelEntity[]> {
        return [_typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest, _typeoffuelTest];
    }
}

export default TypeOfFuelRepositoryDev;