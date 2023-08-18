/********************************************************************************
 * File Header - AllyRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the AllyRepository.
 * The allies are the images show in the carousel of partners
 ********************************************************************************/

import AllyEntity from "../entities/AllyEntity";

export default interface AllyRepository {
    getAll(): Promise<AllyEntity[]>;
}

export const AllyRepositoryName = "AllyRepository";