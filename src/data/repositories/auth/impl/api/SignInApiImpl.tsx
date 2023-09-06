import UserImplDto from "../../../../dto/impl/UserImplDto";
import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";
import UserEntity from "../../../../../domain/entities/UserEntity";

const SignInApiImpl = async (email: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> => {
    const relativeUrl = "/login/";
    try {
        const response = await HostApi.post(relativeUrl, {
            "email": email,
            "password": password,
        });
        HostApi.setToken(response.token);
        const parsed = UserImplDto.fromJson(response.user);
        return right(parsed);
    } catch (error) {
        return left({ message: 'Credencial invalida' });
    }
}

export default SignInApiImpl;