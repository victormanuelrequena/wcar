import HostApi from "../../../../settings/HostApi";

const BookADateForBuyApiImpl = async (bookDateId: string, bookHourId: string, carId: string, password: string, contactInfo: any, separation: number | undefined): Promise<void> => {
    const relativeUrl = "/scheduling-review/create/";
    const knowHim = separation == null || separation == 0;
    const body = {
        "name": contactInfo.name,
        "lastName": contactInfo.lastname,
        "phone": contactInfo.phone,
        "email": contactInfo.email,
        "booking": separation,
        "date_avaliable": bookDateId,
        "hour_avaliable": bookHourId,
        "role": "customer",
        "likes": [],
        "typeSell": false,
        "password": password,
        "car": carId,
        "know_him": knowHim,
    }

    try {
        const response = await HostApi.post(relativeUrl, body);
        if (!knowHim) window.location.href = response.data_eccolect.eCollectUrl;
    } catch (e) {
        console.log('pasa como error', e);
        throw new Error("Error al crear la cita");
    }
}

export default BookADateForBuyApiImpl;