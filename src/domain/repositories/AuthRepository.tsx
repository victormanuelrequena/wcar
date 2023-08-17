import { Either } from "fp-ts/lib/Either";
import UserEntity from "../entities/UserEntity";
import ExceptionEntity from "../entities/ExceptionEntity";

export default interface AuthRepository {
    signIn: (email: string, password: string) => Promise<Either<ExceptionEntity, UserEntity>>;
    signUp: (email: string, password: string, name: string) => Promise<Either<ExceptionEntity, void>>;
    signInWithGoogle(): Promise<Either<ExceptionEntity, UserEntity>>;
    signInWithFacebook(): Promise<Either<ExceptionEntity, UserEntity>>;
    signOut: () => Promise<Either<ExceptionEntity, void>>;
    sendRecoveryCode: (email: string) => Promise<Either<ExceptionEntity, void>>
    sendConfirmCode: (email: string) => Promise<Either<ExceptionEntity, void>>
    confirmUser: (email: string, code: string) => Promise<Either<ExceptionEntity, void>>
    updatePassword: (oldPassword: string, newPassword: string) => Promise<Either<ExceptionEntity, void>>
    updatePasswordByRecovery: (email: string, newPassword: string, code: string) => Promise<Either<ExceptionEntity, void>>
    getCurrentUser: () => Promise<Either<ExceptionEntity, UserEntity>>
    refreshToken: () => Promise<Either<ExceptionEntity, void>>
}


export const AuthRepositoryName = 'AuthRepository';