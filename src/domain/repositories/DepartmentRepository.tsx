/********************************************************************************
 * File Header - DepartmentRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the DepartmentRepository.
 * The departments are the departments that are shown in billing form.
 ********************************************************************************/

import DepartmentEntity from "../entities/DepartmentEntity";

export default interface DepartmentRepository{
    getAll(): Promise<DepartmentEntity[]>;
}

export const DepartmentRepositoryName = "DepartmentRepository";