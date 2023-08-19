import { injectable } from "inversify";
import AllyEntity from "../../entities/AllyEntity";
import AlliesProvider, { AllyProviderName } from "../../providers/ally/AllyProvider";
import AllyRepository from "../../repositories/AllyRepository";
import di from "../../../di/DependencyInjection";
import AllyProvider from "../../providers/ally/AllyProvider";

interface props { allyRepository: AllyRepository, alliesProvider: AlliesProvider }

@injectable()
export default class GetAllAlliesUseCase{
    
    _allyRepository: AllyRepository;
    _alliesProvider: AlliesProvider;

    constructor(_:props) {
        this._allyRepository = _.allyRepository;
        this._alliesProvider = _.alliesProvider;
    }
    async call(): Promise<AllyEntity[]> {
        try {
            const response = await this._allyRepository.getAll();
            this._alliesProvider.Actions.setAllies(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAllAlliesUseCaseName = "GetAllAlliesUseCaseName";