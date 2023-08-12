/********************************************************************************
 * File Header - Send Confirm Code Use Casse
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * When user is not confirmed, send a code to the email to confirm the user.
 ********************************************************************************/

import { Either } from "fp-ts/lib/Either";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository }

@injectable()
class SendConfirmCodeUseCase {
    _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._authRepository = props.authRepository;
    }

    public call = async (email: string): Promise<Either<ExceptionEntity, void>> => this._authRepository.sendConfirmCode(email);
}

export default SendConfirmCodeUseCase;