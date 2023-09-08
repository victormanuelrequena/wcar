import HostApi from "../../../../settings/HostApi";

const BookADateForBuyApiImpl = async (bookDateId: string, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> => {
    const relativeUrl = "/";
    try {
        const response = await HostApi.get(relativeUrl);
    } catch {
        throw new Error("Error");
    }
}

export default BookADateForBuyApiImpl;