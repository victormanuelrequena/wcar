import { injectable } from "inversify";
import CarEntity, { TransmissionCar } from "../../entities/CarEntity";
import OrderByEntity from "../../entities/OrderByEntity";
import CarRepository from "../../repositories/CarRepository";

interface props {
    carRepository: CarRepository;
}
interface Response {
    cars: CarEntity[];
    maxPages: number;
}

@injectable()
export default class SearchCarsUseCase {
    _carRepository: CarRepository;

    constructor(_: props) {
        this._carRepository = _.carRepository;
    }
    async call(
        page: number,
        search: string,
        brand: string | undefined,
        modelId: string | undefined,
        year: string | undefined,
        price: { min: number; max: number } | undefined,
        type: string,
        transmission: TransmissionCar | undefined,
        tag: string | undefined,
        km: { min: number; max: number } | undefined,
        fuelId: string | undefined,
        colorId: string | undefined,
        plateNumber: string | undefined,
        orderBy: OrderByEntity | undefined,
        claims: boolean | undefined,
        amount_claims: number | undefined,
        warranty: boolean | undefined,
        type_warranty: string | undefined,
        types_claims: string | undefined
    ): Promise<Response> {
        return await this._carRepository.search(
            page,
            search,
            brand,
            modelId,
            year,
            price,
            type,
            transmission,
            tag,
            km,
            fuelId,
            colorId,
            plateNumber,
            orderBy,
            claims,
            amount_claims,
            warranty,
            type_warranty,
            types_claims
        );
    }
}

export const SearchCarsUseCaseName = "SearchCarsUseCaseName";
