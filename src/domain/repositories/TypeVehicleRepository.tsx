/********************************************************************************
 * File Header - TypeVehicleRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the TypeVehicleRepository.
 * The type vehicle is the type of vehicle that the car is.
 ********************************************************************************/

import TypeVehicleEntity from "../entities/TypeVehicleEntity";

export default interface TypeVehicleRepository{
    getAll(): Promise<TypeVehicleEntity[]>;
}

export const TypeVehicleRepositoryName = "TypeOfVehicleRepository";