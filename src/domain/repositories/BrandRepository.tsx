/********************************************************************************
 * File Header - BrandRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the BrandRepository.
 * The brands are the car brands that are shown in the buy your car page.
 ********************************************************************************/

import BrandEntity from "../entities/BrandEntity";

export default interface BrandRepository {
    getAll(): Promise<BrandEntity[]>;
    getModelsOfBrand(brandId: string): Promise<string[]>;
    getVersionOfModel(brandId: string, model: string): Promise<string[]>;
}

export const BrandRepositoryName = "BrandRepository";