import ColorEntity from "../entities/ColorEntity";

export default interface ColorRepository {
    getAll(): Promise<ColorEntity[]>;
}

export const ColorRepositoryName = "ColorRepository";
