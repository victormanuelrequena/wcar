import TypeOfFuelProvider from "../../providers/typeOfFuel/TypeOfFuelProvider";
import TypeOfFuelRepository from "../../repositories/TypeOfFuelRepository";

interface props { typeOfFuelRepository: TypeOfFuelRepository, typeOfFuelsProvider: TypeOfFuelProvider }

export default class GetAllTypeOfFuelsUseCase{
    
    _typeOfFuelRepository: TypeOfFuelRepository;
    _typeOfFuelProvider: TypeOfFuelProvider;

    constructor(_:props) {
        this._typeOfFuelRepository = _.typeOfFuelRepository;
        this._typeOfFuelProvider = _.typeOfFuelsProvider;
    }
    async call() {
        try {
            const response = await this._typeOfFuelRepository.getAll();
            this._typeOfFuelProvider.Actions.setTypeOfFuels(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}