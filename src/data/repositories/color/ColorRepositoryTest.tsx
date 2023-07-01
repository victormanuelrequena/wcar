import { injectable } from "inversify";
import ColorRepository from "../../../domain/repositories/ColorRepository";
import ColorEntity from "../../../domain/entities/ColorEntity";

const _colorTest:ColorEntity = {
    id:"1",
    name:"Rojo"
}
@injectable()
class ColorRepositoryTest implements ColorRepository{
    async getAll(): Promise<ColorEntity[]> {
        return [_colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest, _colorTest];
    }
}

export default ColorRepositoryTest;