import { Either, left, right } from "fp-ts/lib/Either";
import CalculatedEntity from "../../../../../domain/entities/CalculatedEntity";
import HostApi from "../../../../settings/HostApi";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";
import { CalculateOfferForCarProps } from "../../../../../domain/repositories/CalculatorRepository";

const CalculateOfferForCarApiImpl = async (_: CalculateOfferForCarProps): Promise<Either<ExceptionEntity, CalculatedEntity>> => {
    const relativeUrl = "/sale-cars/create";
    const body = {
        "year": _.car.year,
        "brand": _.car.brandId,
        "version": _.car.version,
        "model": _.car.model,
        "city": _.car.cityId,
        "mileage": _.car.kilometers,
        "color": _.car.colorId,
        "name": _.contact.name,
        "lastName": _.contact.lastname,
        "email": _.contact.email,
        "phone": _.contact.phone,
        "company": _.contact.companyName,
    };
    try {
        const response = await HostApi.post(relativeUrl, body);
        const _test: CalculatedEntity = {
            id: "1",
            value: 23323232,
        }
        return right(_test);
    } catch (error) {
        return left({});
    }
}

export default CalculateOfferForCarApiImpl;