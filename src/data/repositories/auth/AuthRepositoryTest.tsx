import { injectable } from "inversify";
import UserEntity, { UserEntityStatus, UserPermision } from "../../../domain/entities/UserEntity";
import AuthRepository from "../../../domain/repositories/AuthRepository";
import { Either, right } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../domain/entities/ExceptionEntity";

@injectable()
class AuthRepositoryTest implements AuthRepository {
  public async signInWithGoogle(): Promise<Either<ExceptionEntity, UserEntity>> {
    return right({
      id: '1',
      name: "Jhon Doe",
      phone: 'phone',
      email: "myemail@asd.co",
      enabled: true,
      status: UserEntityStatus.active,
      photo: undefined,
      permisions: [
      ],
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
      permisions: [
      ],
    });
  }
  public async signIn(email: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> {
    return right({
      id: '1',
      name: "Jhon Doe",
      phone: 'phone',
      email: email,
      enabled: true,
      status: UserEntityStatus.active,
      photo: undefined,
      permisions: [
      ],
    });
  }

  public async signUp(email: string, password: string): Promise<Either<ExceptionEntity, void>> {
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
      permisions: [
      ],
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

export default AuthRepositoryTest;
