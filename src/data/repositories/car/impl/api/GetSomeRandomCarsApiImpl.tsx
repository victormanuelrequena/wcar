import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetSomeRandomCarsApiImpl = async (): Promise<CarEntity[]> => {
    const relativeUrl = "/brands";
    try {
        const response = [
            {
                "id": 1,
                "brand_car": {
                    "id": 1,
                    "created_at": "2023-08-12T20:35:58.633288Z",
                    "brand": "BMW",
                    "deleted": false
                },
                "type": {
                    "id": 1,
                    "created_at": "2023-08-12T21:31:02.393005Z",
                    "type": "Sedan"
                },
                "tag_car": {
                    "id": 1,
                    "created_at": "2023-08-12T21:30:18.757713Z",
                    "tag": "Disponible",
                    "color": "#48e",
                    "description": "Carros Disponibles"
                },
                "data_sheet": "https://s3.us-east-2.amazonaws.com/wcar-images/car_data_sheet/TYC-COMPRADOR-WEB-12-05-2022.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fa098fc1624463ca4550b416731ac4f6906024108787ef4d2bd968e61d0cb96c",
                "files": [
                    {
                        "id": 1,
                        "created_at": "2023-08-12T21:54:50.516922Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6920-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cb4cf72256744512621b478453c23f951d5fbb15236cb4eb22f2e9acf0d52d56",
                        "car": 1
                    },
                    {
                        "id": 2,
                        "created_at": "2023-08-12T21:54:56.044934Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6921-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9e94d045b0e76dee44e5f2e10a03f4c76ca2e29eef024e4a2adec32d871b22fe",
                        "car": 1
                    },
                    {
                        "id": 3,
                        "created_at": "2023-08-12T21:55:03.384239Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6923-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=52197aa00acb64d550978d409e68ace083fa6e88a6779b0d92d50fbd2ccf90ab",
                        "car": 1
                    },
                    {
                        "id": 4,
                        "created_at": "2023-08-12T21:55:14.402532Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6924-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8d1a18fceabd9a3cc3d0737a336e75f5edd694e9adb64feb54b016f74ae3b3c5",
                        "car": 1
                    },
                    {
                        "id": 5,
                        "created_at": "2023-08-12T21:55:23.004863Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6925-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0185f245cf61b2585181da737b79070ac1c66bdbeb92003198b0091f75f88e42",
                        "car": 1
                    },
                    {
                        "id": 6,
                        "created_at": "2023-08-12T21:55:31.946657Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6927-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8219b5c7ee989b05e2b608b56005363628a582603448b8eae1975e0b7af75637",
                        "car": 1
                    },
                    {
                        "id": 7,
                        "created_at": "2023-08-12T21:55:38.825477Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6928-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=574a3e2030aaa97e973f00494efeb66e48fd716fea77737d27f5950657b4fbfb",
                        "car": 1
                    },
                    {
                        "id": 8,
                        "created_at": "2023-08-12T21:55:47.491857Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6929-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=10825bdd6be112efe17ae80261434407816deecde6d8436bfe96997ebeb2f2db",
                        "car": 1
                    },
                    {
                        "id": 9,
                        "created_at": "2023-08-12T21:55:54.873101Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6930-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=27ac0902881fe94dd1803cb8c2b465602dd2b81712db3fa76b4ece13e471aee5",
                        "car": 1
                    },
                    {
                        "id": 10,
                        "created_at": "2023-08-12T21:56:02.734118Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6932-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9ae44d62882139c7a27bd28cf69f6989bbfb08f469b9fa313a43228d18b89a0a",
                        "car": 1
                    },
                    {
                        "id": 11,
                        "created_at": "2023-08-12T21:56:07.184553Z",
                        "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6933-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230812%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T233726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b1738fd0b883de0adf9cb5e2f865f8e3d4d8161e7395a2da3ea480fafe89e76b",
                        "car": 1
                    },

                ],
                "created_at": "2023-08-12T21:54:18.082008Z",
                "car": "BMW 420I CABRIOLET AT 2024",
                "year": 2024,
                "fuel_type": "Gasolina",
                "model": "2024",
                "version": "420I Cabriolet",
                "mileage": 2500,
                "tuition": "Placa 3 Bogotá",
                "price": "289990000.00",
                "doors": 2,
                "transmission": 1,
                "traction": 0,
                "engine": "1998",
                "body_type": "Convertible",
                "status_vehicle": 1,
                "description": "BMW 420I CABRIOLET AT 2024\r\n\r\nVENDE WCAR S.A.S\r\n",
                "stars": "4.5",
                "color": "Azul",
                "images": null,
                "brand": 1,
                "tag": 1,
                "type_car": 1
            },
        ]
        // const response = await HostApi.get(relativeUrl);
        return response.map((car: any) => CarImplDto.fromJson(car));
    } catch (error) {
        return [];
    }

}

export default GetSomeRandomCarsApiImpl;