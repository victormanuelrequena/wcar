import ColorEntity from "../../entities/ColorEntity";
import ColorsProvider from "../../providers/color/ColorProvider";
import ColorRepository from "../../repositories/ColorRepository";

interface props { colorRepository: ColorRepository, colorProvider: ColorsProvider }

export default class GetAllColorsUseCase {

    _colorRepository: ColorRepository;
    _colorsProvider: ColorsProvider;

    constructor(_: props) {
        this._colorRepository = _.colorRepository;
        this._colorsProvider = _.colorProvider;
    }
    async call(): Promise<ColorEntity[]> {
        try {
            const response = await this._colorRepository.getAll();
            this._colorsProvider.Actions.setColors(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}