/********************************************************************************
 * File Header - Send Recovery Password Code Use Casse
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * When user forgot the password, send a code to the email to recovery the password.
 ********************************************************************************/

import { Either } from "fp-ts/lib/Either";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository }

@injectable()
class SendRecoveryPasswordCodeUseCase {
    _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._authRepository = props.authRepository;
    }

    public call = async (email: string): Promise<Either<ExceptionEntity, void>> => this._authRepository.sendRecoveryCode(email);
}

export default SendRecoveryPasswordCodeUseCase;

export const SendRecoveryPasswordCodeUseCaseName = "SendRecoveryPasswordCodeUseCaseName";