import HostApi from "../../../../settings/HostApi";

//TODO API
const BookADateForSellApiImpl = async (bookDateId: string, hour: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.post(relativeUrl, "");
    } catch (error) {

    }
}

export default BookADateForSellApiImpl;