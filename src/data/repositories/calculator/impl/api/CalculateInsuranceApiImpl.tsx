import { Either, left, right } from "fp-ts/lib/Either";
import HostApi from "../../../../settings/HostApi";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

const CalculateInsuranceApiImpl = async (name: string, phone: string, email: string, cityId: string, licensePlate: string, whatsApp: boolean): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "/insurance-application/create/";
    try {
        const body = {
            "city": parseInt(cityId),
            "name_full": name,
            "email": email,
            "phone": phone,
            "vehicle_plate": licensePlate,
            "whatsapp": whatsApp
        }
        const response = await HostApi.post(relativeUrl, body);
        return right(response);
    } catch (error) {
        return left({});
    }
}

export default CalculateInsuranceApiImpl;