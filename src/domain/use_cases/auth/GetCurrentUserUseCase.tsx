/********************************************************************************
 * File Header - Get Current User Use Casse
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Get the current user and set it in the provider. If user is null then sing out
 ********************************************************************************/

import { Either, isRight, left } from "fp-ts/lib/Either";
import UserEntity from "../../entities/UserEntity";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
export default class GetCurrentUserUseCase {
    _authRepository: AuthRepository;
    _userProvider: UserProvider;

    constructor(props: props) {
        this._authRepository = props.authRepository;
        this._userProvider = props.userProvider;
    }

    public call = async (): Promise<Either<ExceptionEntity, UserEntity>> => {
        const response = await this._authRepository.getCurrentUser();
        if (isRight(response)) {
            this._userProvider.Actions?.setUser(response.right);
            this._authRepository.signOut();
        } else {
            this._userProvider.Actions?.setUser(undefined);
        }
        return response;
    };
}

export const GetCurrentUserUseCaseName = "GetCurrentUserUseCaseName";