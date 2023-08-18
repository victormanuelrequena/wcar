/********************************************************************************
 * File Header - CommentRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the CommentRepository.
 * The comments are the comments that are shown in the what do they say about wcar component.
 ********************************************************************************/

import CommentEntity from "../entities/CommentEntity";

export default interface CommentRepository {
    getall(): Promise<CommentEntity[]>;
}

export const CommentRepositoryName = "CommentRepository";