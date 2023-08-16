import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const RefreshTokenApiImpl = async (): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "";
    try {
        await HostApi.post(relativeUrl, {});
        return right(undefined);
    } catch (error) {
        return left({});
    }
}

export default RefreshTokenApiImpl;