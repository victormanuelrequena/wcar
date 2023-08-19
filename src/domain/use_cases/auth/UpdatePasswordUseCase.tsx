/********************************************************************************
 * File Header - Update Password Use Case
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Update the old password with the new password.
 ********************************************************************************/

import { Either } from "fp-ts/lib/Either";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
class UpdatePasswordByRecoveryUseCase {

    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._authRepository = props.authRepository;
    }

    public call = async (oldPassword: string, newPassword: string): Promise<Either<ExceptionEntity, void>> => {
        const response = await this._authRepository.updatePassword(oldPassword, newPassword);
        return response;
    };
}

export default UpdatePasswordByRecoveryUseCase;

export const UpdatePasswordByRecoveryUseCaseName = "UpdatePasswordByRecoveryUseCaseName";