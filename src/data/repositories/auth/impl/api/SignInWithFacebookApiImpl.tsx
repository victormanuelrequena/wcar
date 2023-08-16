import UserImplDto from "../../../../dto/impl/UserImplDto";
import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";
import UserEntity from "../../../../../domain/entities/UserEntity";

//TODO API
const SignInWithFacebookApiImpl = async (): Promise<Either<ExceptionEntity, UserEntity>> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.post(relativeUrl, {});
        const parsed = UserImplDto.fromJson(response);
        return right(parsed);
    } catch (error) {
        return left({ message: 'Credencial invalida' });
    }
}

export default SignInWithFacebookApiImpl;