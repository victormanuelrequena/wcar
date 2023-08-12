/********************************************************************************
 * File Header - Delete User Use Casse
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * Delete the current user and clear the provider.
 ********************************************************************************/

import { Either, } from "fp-ts/lib/Either";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import ExceptionEntity from "../../entities/ExceptionEntity";
import { injectable } from "inversify";

interface props { authRepository: AuthRepository, userProvider: UserProvider }

@injectable()
class DeleteUserUseCase {

    private _userProvider: UserProvider;
    private _authRepository: AuthRepository;

    constructor(props: props
    ) {
        this._userProvider = props.userProvider;
        this._authRepository = props.authRepository;
    }

    public call = async (): Promise<Either<ExceptionEntity, void>> => {
        const response = await this._authRepository.deleteUser();
        this._userProvider.Actions.setUser(undefined);
        return response;
    };
}

export default DeleteUserUseCase;