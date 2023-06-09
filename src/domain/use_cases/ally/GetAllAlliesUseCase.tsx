import AlliesProvider from "../../providers/allies/AlliesProvider";
import AllyRepository from "../../repositories/AllyRepository";

interface props { allyRepository: AllyRepository, alliesProvider: AlliesProvider }

export default class GetAllAlliesUseCase{
    
    _allyRepository: AllyRepository;
    _alliesProvider: AlliesProvider;

    constructor(_:props) {
        this._allyRepository = _.allyRepository;
        this._alliesProvider = _.alliesProvider;
    }
    async call() {
        try {
            const response = await this._allyRepository.getAll();
            this._alliesProvider.Actions.setAllies(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}