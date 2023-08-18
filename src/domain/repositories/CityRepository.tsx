/********************************************************************************
 * File Header - CityRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the CityRepository.
 * The cities are the cities that are shown in billing form and need insurance form.
 ********************************************************************************/

import CityEntity from "../entities/CityEntity";

export default interface CityRepository{
    getAll(): Promise<CityEntity[]>;
}

export const CityRepositoryName = "CityRepository";