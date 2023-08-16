import HostApi from "../../../../settings/HostApi";

//TODO API
const BookADateForBuyApiImpl = async (date: Date, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.get(relativeUrl);
    } catch {
        throw new Error("Error");
    }
}

export default BookADateForBuyApiImpl;