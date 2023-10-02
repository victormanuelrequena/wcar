import HostApi from "../../../../settings/HostApi";

const BookACarApiImpl = async (carId: string): Promise<void> => {
    const relativeUrl = "/scheduling-review/create/";
    const body = {
        "car": carId,
    }

    try {
        const response = await HostApi.post(relativeUrl, body);
        console.log("response car id", response);
        window.location.href = response.data_eccolect.eCollectUrl;
    } catch (e) {
        console.log('pasa como error', e);
        throw new Error("Error al crear la cita");
    }
}

export default BookACarApiImpl;