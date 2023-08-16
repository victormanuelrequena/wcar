import HostApi from "../../../../settings/HostApi";
import BookHourImplDto from "../../../../dto/impl/BooHourImplDto";
import BookHourEntity from "../../../../../domain/entities/BookHourEntity";

//TODO API
const GetAvailableHoursForSellApiImpl = async (date: Date, cotizationId: string | undefined): Promise<BookHourEntity[]> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookHourImplDto.fromJson(book));
    } catch (error) {
        return [];
    }
}

export default GetAvailableHoursForSellApiImpl;