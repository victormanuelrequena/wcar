import CarEntity, { TransmissionCar } from "../../../../../domain/entities/CarEntity";
import OrderByEntity from "../../../../../domain/entities/OrderByEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import OrderByImplDto from "../../../../dto/impl/OrderByImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const SearchCarApiImpl = async (page: number, search: string, brand: string | undefined, year: string | undefined, price: { min: number; max: number; } | undefined, type: string, transmission: TransmissionCar | undefined, tag: string | undefined, km: { min: number; max: number; } | undefined, fuelId: string | undefined, colorId: string | undefined, plateNumber: string | undefined, orderBy: OrderByEntity | undefined): Promise<{ cars: CarEntity[]; maxPages: number; }> => {
    try {
        const relativeUrl = "";
        const body = {
            page: page,
            search: search,
            brand: brand,
            year: year,
            price: price,
            type: type,
            transmission: transmission,
            tag: tag,
            km: km,
            fuelId: fuelId,
            colorId: colorId,
            plateNumber: plateNumber,
            orderBy: orderBy != undefined ? OrderByImplDto.toJson(orderBy) : undefined,
        };
        const response = await HostApi.post(relativeUrl, body);
        return {
            cars: response.cars.map((car: any) => CarImplDto.fromJson(car)),
            maxPages: response.maxPages
        }
    } catch (error) {
        return {
            cars: [],
            maxPages: 0
        }
    }
}

export default SearchCarApiImpl;