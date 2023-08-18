/********************************************************************************
 * File Header - ColorRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the ColorRepository.
 * The colors are the colors that are shown in the buy your car page.
 ********************************************************************************/

import ColorEntity from "../entities/ColorEntity";

export default interface ColorRepository {
    getAll(): Promise<ColorEntity[]>;
}

export const ColorRepositoryName = "ColorRepository";
