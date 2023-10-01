import HostApi from "../../../../settings/HostApi";

const BookADateForSeeApiImlp = async (bookDateId: string, bookHourId: string, carId: string, contactInfo: any): Promise<void> => {
    const relativeUrl = "/scheduling-review/create/";
    const body = {
        "name": contactInfo.name,
        "lastName": contactInfo.lastname,
        "phone": contactInfo.phone,
        "email": contactInfo.email,
        "booking": false, //to separate
        "date_avaliable": bookDateId,
        "hour_avaliable": bookHourId,
        "role": "customer",
        "likes": [],
        "typeSell": false,
        "car": carId,
    }

    try {
        const response = await HostApi.post(relativeUrl, body);
    } catch (e) {
        console.log('pasa como error', e);
        throw new Error("Error al crear la cita");
    }
}

export default BookADateForSeeApiImlp;