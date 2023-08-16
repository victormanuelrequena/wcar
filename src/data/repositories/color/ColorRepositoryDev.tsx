import { injectable } from "inversify";
import ColorRepository from "../../../domain/repositories/ColorRepository";
import ColorEntity from "../../../domain/entities/ColorEntity";

const _colorTest:ColorEntity = {
    id:"1",
    name:"Rojo",
    colorHex:"#FF0000"
}
@injectable()
class ColorRepositoryDev implements ColorRepository{
    async getAll(): Promise<ColorEntity[]> {
        return [_colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest];
    }
}

export default ColorRepositoryDev;