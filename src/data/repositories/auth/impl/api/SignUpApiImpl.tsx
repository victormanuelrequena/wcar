import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const SignUpApiImpl = async (email: string, password: string, name: string): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "";
    try {
        await HostApi.post(relativeUrl, {
            "email": email,
            "password": password,
            "name": name,
        });
        return right(undefined);
    } catch (error) {
        return left({});
    }
}

export default SignUpApiImpl;