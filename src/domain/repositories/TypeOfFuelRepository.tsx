/********************************************************************************
 * File Header - TypeOfFuelRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the TypeOfFuelRepository.
 * The type of fuel is the type of fuel that the car uses.
 ********************************************************************************/

import TypeOfFuelEntity from "../entities/TypeOfFuelEntity";

export default interface TypeOfFuelRepository {
    getAll(): Promise<TypeOfFuelEntity[]>;
}

export const TypeOfFuelRepositoryName = "TypeOfFuelRepository";
