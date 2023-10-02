import HostApi from "../../../../settings/HostApi";

//TODO API
const BookADateForSellApiImpl = async (bookDateId: string, bookHourId: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => {
    const relativeUrl = "/sale-cars/create/";
    const body = {
        "name": contactInfo.name,
        "lastName": contactInfo.lastname,
        "phone": contactInfo.phone,
        "email": contactInfo.email,
        "date_avaliable": bookDateId,
        "hour_avaliable": bookHourId,
        "role": "customer",
        "likes": [],
        "typeSell": true,
    }

    
    try {
        const response = await HostApi.post(relativeUrl, body);
    } catch (error) {

    }
}

export default BookADateForSellApiImpl;