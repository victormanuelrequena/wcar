import { Either, left, right } from "fp-ts/lib/Either";
import HostApi from "../../../../settings/HostApi";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

//TODO API
const CalculateInsuranceApiImpl = async (name: string, phone: string, email: string, cityId: string, licensePlate: string): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "";
    try {
        const body = {
            name,
            phone,
            email,
            cityId,
            licensePlate,
        }
        const response = await HostApi.post(relativeUrl, body);
        return right(response);
    } catch (error) {
        return left({});
    }
}

export default CalculateInsuranceApiImpl;