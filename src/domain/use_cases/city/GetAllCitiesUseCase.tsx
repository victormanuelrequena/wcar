import CityEntity from "../../entities/CityEntity";
import CityProvider from "../../providers/city/CityProvider";
import CityRepository from "../../repositories/CityRepository";

interface props {
    cityRepository: CityRepository;
    cityProvider: CityProvider;
}

export default class GetAllCitiesUseCase {
    _cityRepository: CityRepository;
    _cityProvider: CityProvider;

    constructor(_: props) {
        this._cityRepository = _.cityRepository;
        this._cityProvider = _.cityProvider;
    }

    async call(): Promise<CityEntity[]>{
        try {
            if(this._cityProvider.Actions.cities.length > 0){
                return this._cityProvider.Actions.cities;
            }else{
                const cities = await this._cityRepository.getAll();
                this._cityProvider.Actions.setCities(cities);
                return cities;
            }
        } catch (error) {
            this._cityProvider.Actions.setCities([]);
            return [];
        }
    }
}