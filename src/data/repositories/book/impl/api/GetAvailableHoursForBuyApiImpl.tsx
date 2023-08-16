import BookHourEntity from "../../../../../domain/entities/BookHourEntity";
import BookHourImplDto from "../../../../dto/impl/BooHourImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAvailableHoursForBuyApiImpl = async (date: Date, cardId: string): Promise<BookHourEntity[]> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookHourImplDto.fromJson)
    } catch (error) {
        return [];
    }
}

export default GetAvailableHoursForBuyApiImpl;