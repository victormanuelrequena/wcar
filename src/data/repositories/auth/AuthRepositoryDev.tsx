import { injectable } from "inversify";
import UserEntity, { UserEntityStatus, UserRole } from "../../../domain/entities/UserEntity";
import AuthRepository from "../../../domain/repositories/AuthRepository";
import { Either, right } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../domain/entities/ExceptionEntity";
import SignInApiImpl from "./impl/api/SignInApiImpl";

@injectable()
class AuthRepositoryDev implements AuthRepository {
  public async signInWithGoogle(): Promise<Either<ExceptionEntity, UserEntity>> {
    return right({
      id: '1',
      name: "Jhon Doe",
      phone: 'phone',
      email: "myemail@asd.co",
      enabled: true,
      status: UserEntityStatus.active,
      photo: undefined,
      role: UserRole.CUSTOMER,
    });
  }
  public async signInWithFacebook(): Promise<Either<ExceptionEntity, UserEntity>> {
    return right({
      id: '1',
      name: "Jhon Doe",
      phone: 'phone',
      email: "myemail@asd.co",
      enabled: true,
      status: UserEntityStatus.active,
      photo: undefined,
      role: UserRole.CUSTOMER,
    });
  }
  signIn = (email: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> => SignInApiImpl(email, password);
  public async signUp(email: string, password: string, name: string): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);
  }

  public async signOut(): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);

  }

  public async confirmUser(email: string): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);

  }

  public async sendRecoveryCode(email: string): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);

  }

  public async sendConfirmCode(email: string): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);

  }

  public async updatePasswordByRecovery(email: string, newPassword: string, code: string): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);

  }

  public async getCurrentUser(): Promise<Either<ExceptionEntity, UserEntity>> {
    return right({
      id: "1",
      name: "Jhon Doe",
      phone: 'phone',
      email: 'email',
      enabled: true,
      role: UserRole.CUSTOMER,
      status: UserEntityStatus.active,
    });
  }
  
  public async refreshToken(): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);
  }

  public async updatePassword(): Promise<Either<ExceptionEntity, void>> {
    return right(undefined);
  }
}

export default AuthRepositoryDev;
