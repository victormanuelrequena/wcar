import { injectable } from "inversify";
import ColorRepository from "../../../../domain/repositories/ColorRepository";
import ColorEntity from "../../../../domain/entities/ColorEntity";
import GetAllColorsApiImpl from "./api/GetAllColorsApiImpl";

@injectable()
export default class ColorRepositoryDev implements ColorRepository{
    getAll = (): Promise<ColorEntity[]> => GetAllColorsApiImpl();
}