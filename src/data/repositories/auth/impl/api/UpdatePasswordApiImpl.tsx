import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const UpdatePasswordApiImpl = async (oldPassword: string, newPassword: string): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "";
    try {
        await HostApi.post(relativeUrl, {
            "old_password": oldPassword,
            "new_password": newPassword,
        });
        return right(undefined);
    } catch (error) {
        return left({});
    }
}

export default UpdatePasswordApiImpl;