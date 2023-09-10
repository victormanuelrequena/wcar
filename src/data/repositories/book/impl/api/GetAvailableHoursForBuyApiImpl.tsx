import BookHourEntity from "../../../../../domain/entities/BookHourEntity";
import BookHourImplDto from "../../../../dto/impl/BooHourImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAvailableHoursForBuyApiImpl = async (bookDateId: string, cardId: string): Promise<BookHourEntity[]> => {
    const relativeUrl = `/date-avaliable-review/${bookDateId}/`;
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookHourImplDto.fromJson(book))
    } catch (error) {
        return [];
    }
}

export default GetAvailableHoursForBuyApiImpl;