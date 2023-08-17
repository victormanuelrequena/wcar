/********************************************************************************
 * File Header - Sign Up Use Case
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Logic to sign up a new user.
 ********************************************************************************/

import { Either } from "fp-ts/lib/Either";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository }

@injectable()
class SignUpUseCase {

    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._authRepository = props.authRepository;
    }

    public call = async (user: string, password: string, name: string): Promise<Either<ExceptionEntity, void>> => this._authRepository.signUp(user, password, name);
}

export default SignUpUseCase;