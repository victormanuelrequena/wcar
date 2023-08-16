import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";
import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";

//TODO API
const BookACarPaymentApiImpl = async (carId: string, paymentInfo: any): Promise<Either<ExceptionEntity, void>> => {
    const relativeUrl = "/brands";
    try {
        const response = await HostApi.post(relativeUrl, {
            "car_id": carId,
            "payment_info": paymentInfo
        });
        return right(undefined);
    } catch (error) {
        return left({
            message: "Error al reservar el carro"
        })
    }

}

export default BookACarPaymentApiImpl;