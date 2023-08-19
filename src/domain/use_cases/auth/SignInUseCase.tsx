/********************************************************************************
 * File Header - Sign In Use Case
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the call to the login service. and the logic to save the user
 ********************************************************************************/

import { Either, isRight } from "fp-ts/lib/Either";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import UserEntity from "../../entities/UserEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
class SignInUseCase {

    private _userProvider: UserProvider;
    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._userProvider = props.userProvider;
        this._authRepository = props.authRepository;
    }

    public call = async (user: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> => {
        const response = await this._authRepository.signIn(user, password);
        this._userProvider.Actions.setUser(isRight(response) ? response.right : undefined);
        return response;
    };
}

export default SignInUseCase;

export const SignInUseCaseName = "SignInUseCaseName";