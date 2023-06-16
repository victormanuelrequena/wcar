import TypeVehicleProvider from "../../providers/typeVehicle/TypeVehicleProvider";
import TypeVehicleRepository from "../../repositories/TypeVehicleRepository";

interface props { typeVehicleRepository: TypeVehicleRepository, typeVehicleProvider: TypeVehicleProvider }

export default class GetAllTypeVehiclesUseCase{
    
    _typeVehicleRepository: TypeVehicleRepository;
    _typeVehicleProvider: TypeVehicleProvider;

    constructor(_:props) {
        this._typeVehicleRepository = _.typeVehicleRepository;
        this._typeVehicleProvider = _.typeVehicleProvider;
    }
    async call() {
        try {
            const response = await this._typeVehicleRepository.getAll();
            this._typeVehicleProvider.Actions.setTypeVehicles(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}