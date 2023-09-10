import HostApi from "../../../../settings/HostApi";

const ConfirmBookingBuyApiImpl = async (bookId: string): Promise<void> => {
    const relativeUrl = `/confirm-review/${bookId}/`;
    try {
        await HostApi.get(relativeUrl);
        return;
    } catch (error) {
    }
}

export default ConfirmBookingBuyApiImpl;