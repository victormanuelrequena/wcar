import CarEntity, { TransmissionCar } from "../../../../../domain/entities/CarEntity";
import OrderByEntity from "../../../../../domain/entities/OrderByEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import OrderByImplDto from "../../../../dto/impl/OrderByImplDto";
import HostApi from "../../../../settings/HostApi";

const SearchCarApiImpl = async (page: number, search: string, brand: string | undefined, year: string | undefined, price: { min: number; max: number; } | undefined, type: string, transmission: TransmissionCar | undefined, tag: string | undefined, km: { min: number; max: number; } | undefined, fuelId: string | undefined, colorId: string | undefined, plateNumber: string | undefined, orderBy: OrderByEntity | undefined): Promise<{ cars: CarEntity[]; maxPages: number; }> => {
    try {
        const relativeUrl = "/filter-cars/";
        const body = {
            brand: brand,
            tag: tag,
            price_from: price?.min ?? undefined,
            price_to: price?.max ?? undefined,
            year_from: year,
            year_to: year,
            mileage_from: km?.min ?? undefined,
            mileage_to: km?.max ?? undefined,
            body_type: type,
            colors: colorId ? [] : undefined,
            fuel_type: fuelId,
            transmission: transmission,
            orderBy: orderBy != undefined ? OrderByImplDto.toJson(orderBy) : undefined,
        }
        console.log('body', body);
        const response = await HostApi.post(relativeUrl, body);
        return {
            cars: response.data.map((car: any) => CarImplDto.fromJson(car)),
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