import { injectable } from "inversify";
import AuthRepository from "../../../../domain/repositories/AuthRepository";
import { Either } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../domain/entities/ExceptionEntity";
import UserEntity from "../../../../domain/entities/UserEntity";
import SignInApiImpl from "./api/SignInApiImpl";
import SignUpApiImpl from "./api/SignUpApiImpl";
import SignInWithGoogleApiImpl from "./api/SignInWithGoogleApiImpl";
import SignInWithFacebookApiImpl from "./api/SignInWithFacebookApiImpl";
import SignOutApiImpl from "./api/SignOutApiImpl";
import SendRecoveryCodeApiImpl from "./api/SendRecoveryCodeApiImpl";
import SendConfirmCodeApiImpl from "./api/SendConfirmCodeApiImpl";
import ConfirmUserApiImpl from "./api/ConfirmUserApiImpl";
import UpdatePasswordApiImpl from "./api/UpdatePasswordApiImpl";
import GetCurrentUserApiImpl from "./api/GetCurrentUserApiImpl";
import RefreshTokenApiImpl from "./api/RefreshTokenApiImpl";
import UpdatePasswordByRecoveryApiImpl from "./api/UpdatePasswordByRecoveryApiImpl";

@injectable()
export default class AuthRepositoryImpl implements AuthRepository {
    signIn = (email: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> => SignInApiImpl(email, password);
    signUp = (email: string, password: string, name: string): Promise<Either<ExceptionEntity, void>> => SignUpApiImpl(email, password, name);
    signInWithGoogle = (): Promise<Either<ExceptionEntity, UserEntity>> => SignInWithGoogleApiImpl();
    signInWithFacebook = (): Promise<Either<ExceptionEntity, UserEntity>> => SignInWithFacebookApiImpl();
    signOut = (): Promise<Either<ExceptionEntity, void>> => SignOutApiImpl();
    sendRecoveryCode = (email: string): Promise<Either<ExceptionEntity, void>> => SendRecoveryCodeApiImpl(email);
    sendConfirmCode = (email: string): Promise<Either<ExceptionEntity, void>> => SendConfirmCodeApiImpl(email);
    confirmUser = (email: string, code: string): Promise<Either<ExceptionEntity, void>> => ConfirmUserApiImpl(email, code);
    updatePassword = (oldPassword: string, newPassword: string): Promise<Either<ExceptionEntity, void>> => UpdatePasswordApiImpl(oldPassword, newPassword);
    updatePasswordByRecovery = (email: string, newPassword: string, code: string): Promise<Either<ExceptionEntity, void>> => UpdatePasswordByRecoveryApiImpl(email, newPassword, code);
    getCurrentUser = (): Promise<Either<ExceptionEntity, UserEntity>> => GetCurrentUserApiImpl();
    refreshToken = (): Promise<Either<ExceptionEntity, void>> => RefreshTokenApiImpl();
}