import BookDateEntity from "../../../../../domain/entities/BookDateEntity";
import BookDateImplDto from "../../../../dto/impl/BookDateImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAvailableDatesForSellApiImpl = async (cotizationId: string | undefined): Promise<BookDateEntity[]> => {
    const relativeUrl = "/date-avaliable-review-sell/";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookDateImplDto.fromJson(book));
    } catch (error) {
        return [];
    }
}

export default GetAvailableDatesForSellApiImpl;