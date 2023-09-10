import HostApi from "../../../../settings/HostApi";
import BookHourImplDto from "../../../../dto/impl/BooHourImplDto";
import BookHourEntity from "../../../../../domain/entities/BookHourEntity";

const GetAvailableHoursForSellApiImpl = async (bookDateId: string, cotizationId: string | undefined): Promise<BookHourEntity[]> => {
    const relativeUrl = `/date-avaliable-review-sell/${bookDateId}/`;
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookHourImplDto.fromJson(book));
    } catch (error) {
        return [];
    }
}

export default GetAvailableHoursForSellApiImpl;