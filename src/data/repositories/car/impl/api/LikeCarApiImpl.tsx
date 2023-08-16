import HostApi from "../../../../settings/HostApi";

//TODO API
const LikeCarApiImpl = async (carId: string, like: boolean): Promise<void> => {
    try {
        const relativeUrl = "/cars/like";
        const body = {
            car_id: carId,
            'like': like,
        };
        const response = await HostApi.post(relativeUrl, body);
    } catch (error) {
        return;
    }
}

export default LikeCarApiImpl;