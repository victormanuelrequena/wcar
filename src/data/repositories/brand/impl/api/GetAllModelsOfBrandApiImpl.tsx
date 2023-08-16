import HostApi from "../../../../settings/HostApi";

//TODO API
const GetAllModelsOfBrandApiImpl = async (brandId: string): Promise<string[]> => {
    const relativeUrl = "/brands";
    try {
        const response = await HostApi.post(relativeUrl, {
            "brand_id": brandId,
        });
        return response;
    } catch (error) {
        return [];
    }
}

export default GetAllModelsOfBrandApiImpl;