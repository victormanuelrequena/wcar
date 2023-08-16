import { Either, left, right } from "fp-ts/lib/Either";
import CalculatedEntity from "../../../../../domain/entities/CalculatedEntity";
import HostApi from "../../../../settings/HostApi";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const CalculateOfferForCarApiImpl = async (_: any): Promise<Either<ExceptionEntity, CalculatedEntity>> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
        return right(response);
    } catch (error) {
        return left({});
    }
}

export default CalculateOfferForCarApiImpl;