/********************************************************************************
 * File Header - Update Password By Recovery Use Case
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * After a user forgot the password, and the code was sent to the email, He can update the password with the code sent.
 ********************************************************************************/

import { Either, isRight } from "fp-ts/lib/Either";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
class UpdatePasswordByRecoveryUseCase {

    private _userProvider: UserProvider;
    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._userProvider = props.userProvider;
        this._authRepository = props.authRepository;
    }

    public call = async (email: string, password: string, code: string): Promise<Either<ExceptionEntity, void>> => {
        const response = await this._authRepository.updatePasswordByRecovery(email, password, code);
        if (isRight(response)) this._userProvider.Actions.setUser(undefined);
        return response;
    };
}

export default UpdatePasswordByRecoveryUseCase;

export const UpdatePasswordByRecoveryUseCaseName = "UpdatePasswordByRecoveryUseCaseName";