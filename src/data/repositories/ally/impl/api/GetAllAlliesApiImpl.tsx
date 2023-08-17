import AllyEntity from "../../../../../domain/entities/AllyEntity";
import AllyImplDto from "../../../../dto/impl/AllyImplDto";
import HostApi from "../../../../settings/HostApi";

const GetAllAlliesApiImpl = async (): Promise<AllyEntity[]> => {
    const relativeUrl = "/partners";
    try {
        // const response = await HostApi.get(relativeUrl);
        const response = [
            {
              "partner": "Finandina",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/LOGO-FINANDINA-150x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f6ed7fdc91c3de9ab321423e4f61a3cfd32458587a961752435fe768106beec1"
            },
            {
              "partner": "santander",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/Logos-web-2-150x150_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2d484b040374a876a31d70b64deb2e57759f1f3aed240c44f22db17595c7809b"
            },
            {
              "partner": "Gia",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/Logos-web-2-150x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2c84e469064e09724cfeddca567ad8a7ae4599f26372e25c2878153585098bdc"
            },
            {
              "partner": "Vega",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/Logos-web-3-150x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6f80cb5a0c5cfea92b7169271f431f3f1f706005ad068b7fcc0f89c76bf364da"
            },
            {
              "partner": "Garanti Plus",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/Logos-web-4-150x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8ecee9989266d4bf394e983934f5aae58574f9394c0fef12c7eab15ab8ce2949"
            },
            {
              "partner": "Sufi",
              "image": "https://s3.us-east-2.amazonaws.com/wcar-images/partners/Logos-web-150x150.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T231745Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c27a2a4e592c200d7d9c42a0e7c7b20912dacef7a2a9e3f0280c7936fe61e8f9"
            }
          ];
        return response.map((ally: any) => AllyImplDto.fromJson(ally));
    } catch (error) {
        return [];
    }
}

export default GetAllAlliesApiImpl;