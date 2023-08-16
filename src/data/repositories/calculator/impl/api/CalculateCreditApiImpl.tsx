import { Either, left, right } from "fp-ts/lib/Either";
import HostApi from "../../../../settings/HostApi";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const CalculateCreditApiImpl = async (vehicleValue: number, initialQuote: number, months: number, insuranceId: string): Promise<Either<ExceptionEntity, number>> => {
    const relativeUrl = "";
    try {
        const body = {
            vehicleValue,
            initialQuote,
            months,
            insuranceId,
        }
        const response = await HostApi.post(relativeUrl, body);
        return right(response);
    } catch (error) {
        return left({});
    }
}

export default CalculateCreditApiImpl;