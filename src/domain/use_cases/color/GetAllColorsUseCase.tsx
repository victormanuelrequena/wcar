import ColorsProvider from "../../providers/color/ColorProvider";
import ColorRepository from "../../repositories/ColorRepository";

interface props { colorRepository: ColorRepository, colorsProvider: ColorsProvider }

export default class GetAllColorsUseCase{
    
    _colorRepository: ColorRepository;
    _colorsProvider: ColorsProvider;

    constructor(_:props) {
        this._colorRepository = _.colorRepository;
        this._colorsProvider = _.colorsProvider;
    }
    async call() {
        try {
            const response = await this._colorRepository.getAll();
            this._colorsProvider.Actions.setColors(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}