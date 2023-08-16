import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const UpdatePasswordByRecoveryApiImpl = async (email: string, newPassword: string, code: string): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "";
    try {
        await HostApi.post(relativeUrl, {
            "email": email,
            "new_password": newPassword,
            "code": code,
        });
        return right(undefined);
    } catch (error) {
        return left({});
    }
}

export default UpdatePasswordByRecoveryApiImpl;