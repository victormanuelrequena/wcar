/********************************************************************************
 * File Header - TagRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the TagRepository.
 * The tags are the tags that are used to classify the cars.
 ********************************************************************************/

import TagEntity from "../entities/TagEntity";

export default interface TagRepository{
    getAll(): Promise<TagEntity[]>;
}

export const TagRepositoryName = "TagRepository";