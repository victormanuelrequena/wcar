/********************************************************************************
 * File Header - Confirm User Use Casse
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Confirm the current user using the code sent to the email.
 ********************************************************************************/

import { Either } from "fp-ts/lib/Either";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository }

@injectable()
class ConfirmUserUseCase {
    _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._authRepository = props.authRepository;
    }

    public call = async (email: string, code: string): Promise<Either<ExceptionEntity, void>> => this._authRepository.confirmUser(email, code);
}

export default ConfirmUserUseCase;