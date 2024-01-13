import CarEntity, { TransmissionCar } from "../../../../../domain/entities/CarEntity";
import OrderByEntity from "../../../../../domain/entities/OrderByEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

const SearchCarApiImpl = async (
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
    warranty: boolean
): Promise<{ cars: CarEntity[]; maxPages: number }> => {
    try {
        const relativeUrl = `/filter-cars/?page=${page}`;

        const body = {
            brand: brand,
            model: modelId,
            tag: tag,
            price_from: price?.min ?? undefined,
            price_to: price?.max ?? undefined,
            year_from: year,
            year_to: year,
            mileage_from: km?.min ?? undefined,
            mileage_to: km?.max ?? undefined,
            body_type: type,
            colors: colorId ? [colorId] : [],
            fuel_type: fuelId,
            transmission: transmission == TransmissionCar.AUTOMATIC ? 1 : 0,
            search_word: search,
            plate_number: plateNumber,
            orderBy: orderBy?.value != undefined ? (orderBy.value?.desc ? "desc" : "asc") : undefined,
            warranty: orderBy?.value?.warranty
        };
        console.log(body, "body filter");

        const response = await HostApi.post(relativeUrl, body);
        return {
            cars: response.results
                .map((car: any) => CarImplDto.fromJson(car))
                .filter((car: CarEntity) => car.id != "19"),
            maxPages: response.num_pages,
        };
    } catch (error) {
        return {
            cars: [],
            maxPages: 0,
        };
    }
};

export default SearchCarApiImpl;
