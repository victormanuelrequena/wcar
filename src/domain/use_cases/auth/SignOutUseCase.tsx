/********************************************************************************
 * File Header - Sign Out Use Case
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Logic to sign out the current user.
 ********************************************************************************/

import { Either, isRight } from "fp-ts/lib/Either";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
class SignOutUseCase {

    private _userProvider: UserProvider;
    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._userProvider = props.userProvider;
        this._authRepository = props.authRepository;
    }

    public call = async (): Promise<Either<ExceptionEntity, void>> => {
        const response = await this._authRepository.signOut();
        if (isRight(response)) this._userProvider.Actions.setUser(undefined);
        return response;
    };
}

export default SignOutUseCase;