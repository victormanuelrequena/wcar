import InsuranceEntity from "../../../../../domain/entities/InsuranceEntity";
import InsuranceImplDto from "../../../../dto/impl/InsuranceImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO Api
const GetAllInsurancesApiImpl = async (): Promise<InsuranceEntity[]> => {
    const relativeUrl = '/insurance';
    try {
        const response = await HostApi.get(relativeUrl);
        return response.map((insurance: any) => InsuranceImplDto.fromJson(insurance));
    } catch (error) {
        return [];
    }
}

export default GetAllInsurancesApiImpl;