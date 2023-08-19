import { injectable } from "inversify";
import TypeOfFuelEntity from "../../entities/TypeOfFuelEntity";
import TypeOfFuelProvider from "../../providers/typeOfFuel/TypeOfFuelProvider";
import TypeOfFuelRepository from "../../repositories/TypeOfFuelRepository";

interface props { typeOfFuelRepository: TypeOfFuelRepository, typeOfFuelProvider: TypeOfFuelProvider }

@injectable()
export default class GetAllTypeOfFuelsUseCase {

    _typeOfFuelRepository: TypeOfFuelRepository;
    _typeOfFuelProvider: TypeOfFuelProvider;

    constructor(_: props) {
        this._typeOfFuelRepository = _.typeOfFuelRepository;
        this._typeOfFuelProvider = _.typeOfFuelProvider;
    }
    async call():Promise<TypeOfFuelEntity[]> {
        try {
            if(this._typeOfFuelProvider.Actions.typeOfFuels.length > 0) return this._typeOfFuelProvider.Actions.typeOfFuels;
            const response = await this._typeOfFuelRepository.getAll();
            this._typeOfFuelProvider.Actions.setTypeOfFuels(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAllTypeOfFuelsUseCaseName = "GetAllTypeOfFuelsUseCaseName";