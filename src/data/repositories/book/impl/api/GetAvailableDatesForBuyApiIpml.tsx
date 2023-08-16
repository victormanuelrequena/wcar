import BookDateEntity from "../../../../../domain/entities/BookDateEntity";
import BookDateImplDto from "../../../../dto/impl/BookDateImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAvailableDatesForBuyApiIpml = async (carId: string): Promise<BookDateEntity[]> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((book: any) => BookDateImplDto.fromJson(book));
    } catch (error) {
        return [];
    }
}

export default GetAvailableDatesForBuyApiIpml;