import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllVersionOfModelsApiImpl = async (brandId: string, model: string): Promise<string[]> => {
    const relativeUrl = "";
    try {
        const response = await HostApi.post(relativeUrl, {
            "brand_id": brandId,
            "model": model,
        });
        return response;
    } catch (error) {
        return [];
    }
}

export default GetAllVersionOfModelsApiImpl;