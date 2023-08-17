import CarEntity from "../../../../../domain/entities/CarEntity";
import CarImplDto from "../../../../dto/impl/CarImplDto";
import HostApi from "../../../../settings/HostApi";

//TODO API
const GetSomeRandomCarsApiImpl = async (): Promise<CarEntity[]> => {
    const relativeUrl = "/cars/recommended";
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
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6920-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d8b1ed59e1bdeaea179d373b005f8fa75a858934c364d0689fcd629055841623",
                      "car": 1
                    },
                    {
                      "id": 2,
                      "created_at": "2023-08-12T21:54:56.044934Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6921-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d078dcb4ad0ca7a407baddcb0b7206bc30f50a579db3e7ed90adbd6ea1565a45",
                      "car": 1
                    },
                    {
                      "id": 3,
                      "created_at": "2023-08-12T21:55:03.384239Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6923-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fa6a6665c9ae9fab67006a486e0786524e2d1f581675b6811bd665650b694d73",
                      "car": 1
                    },
                    {
                      "id": 4,
                      "created_at": "2023-08-12T21:55:14.402532Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6924-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0a8b44fac6b3618c0bbd487c2f1ef89aab18d8afeb1df69594cac318dd216171",
                      "car": 1
                    },
                    {
                      "id": 5,
                      "created_at": "2023-08-12T21:55:23.004863Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6925-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0a1c05becdcef49b0baf6fb4b790a9837f34387a4f69bc36baebca28eed5e16c",
                      "car": 1
                    },
                    {
                      "id": 6,
                      "created_at": "2023-08-12T21:55:31.946657Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6927-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f9d89797a0588300549731af6ff3c2af44c2b597de3e9f9e64b64b31e2c7e109",
                      "car": 1
                    },
                    {
                      "id": 7,
                      "created_at": "2023-08-12T21:55:38.825477Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6928-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=af458ef1c507b24cccc55229c45a84b2079fd264e109064f23beed4e039b6d8a",
                      "car": 1
                    },
                    {
                      "id": 8,
                      "created_at": "2023-08-12T21:55:47.491857Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6929-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a9c3162badde9f0a750d0fbebca9dbec56a9a7bb76b5449822157d8ec411ac0e",
                      "car": 1
                    },
                    {
                      "id": 9,
                      "created_at": "2023-08-12T21:55:54.873101Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6930-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fbb88dbd6e29a90e0cf3abf7b7db4072abbc60012a7eddc4f7c6d5c42ceeec3d",
                      "car": 1
                    },
                    {
                      "id": 10,
                      "created_at": "2023-08-12T21:56:02.734118Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6932-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6f28cf8e777f09f30b40f544efefc68f337343ce599aa8598b1da5f3b6cc0481",
                      "car": 1
                    },
                    {
                      "id": 11,
                      "created_at": "2023-08-12T21:56:07.184553Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6933-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4b28e5bbda8b16f05a9da5f106bab81b90d5b04ed47e05e0671ba2ea01977c4c",
                      "car": 1
                    },
                    {
                      "id": 12,
                      "created_at": "2023-08-12T21:56:11.407399Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6934-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5af3a0b9d3a50106ca45a4f6bdec2686f9ecae05587010f6e68298df0a014103",
                      "car": 1
                    },
                    {
                      "id": 13,
                      "created_at": "2023-08-12T21:56:18.626504Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6935-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fd212844d802c070b881752e129569658ce248112280fd5e716535c78ffe0793",
                      "car": 1
                    },
                    {
                      "id": 14,
                      "created_at": "2023-08-12T21:56:24.247233Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6936-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=275d727a696175ba72a88b040337e1cc30a78ab8e1dba279ee7cd0c283ee935e",
                      "car": 1
                    },
                    {
                      "id": 15,
                      "created_at": "2023-08-12T21:56:28.464953Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6937-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=29acdfd0f75b73033a4b7458341613602603f7a9071df2b6da263cbd3dc7b216",
                      "car": 1
                    },
                    {
                      "id": 16,
                      "created_at": "2023-08-12T21:56:34.419224Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6938-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=61d61bf62b111c9f7825662f1005ea2dc369c550d5e1ebdf5ac9c9fe07006c16",
                      "car": 1
                    },
                    {
                      "id": 17,
                      "created_at": "2023-08-12T21:56:39.649406Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6940-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7524b5e13400295dd6952ddf9a6b1a5c534dd94735ac5b9e62769b8af73b3733",
                      "car": 1
                    },
                    {
                      "id": 18,
                      "created_at": "2023-08-12T21:56:44.391001Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6941-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=81944266ab804e4499df9012684f5ee5bc7867be07d31f981f5d30f6f14da7bb",
                      "car": 1
                    },
                    {
                      "id": 19,
                      "created_at": "2023-08-12T21:56:48.774790Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6942-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=97b08008760476089b562e95eaff4cb5ce0d142fc0276628afb8b30a6cd1cdc7",
                      "car": 1
                    },
                    {
                      "id": 20,
                      "created_at": "2023-08-12T21:56:52.498755Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6943-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=072f84c91047b2325a1dbac8d7976006a230a0fc025cf977f85124a23389b5f3",
                      "car": 1
                    },
                    {
                      "id": 21,
                      "created_at": "2023-08-12T21:56:58.030680Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6944-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e576add4683f23f1aa5dfef58f7caad9ac8fda349bc09dcf2d1cf06e3bbcadce",
                      "car": 1
                    },
                    {
                      "id": 22,
                      "created_at": "2023-08-12T21:57:02.362268Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6945-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a2e464760fd6e501c96b4f50fc96d8fc28eb9fb484b3b9d6828cf74a05beeb3f",
                      "car": 1
                    },
                    {
                      "id": 23,
                      "created_at": "2023-08-12T21:57:05.796247Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6946-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=db2a9491b00f45667152c223b452e113ac4566dc35b00d60369e9b81487772dc",
                      "car": 1
                    },
                    {
                      "id": 24,
                      "created_at": "2023-08-12T21:57:10.531806Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6947-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6d42f57430b237d8f1358b0ef1450efe6313aa9be3054922a6db6592515e7356",
                      "car": 1
                    },
                    {
                      "id": 25,
                      "created_at": "2023-08-12T21:57:15.737044Z",
                      "image": "https://s3.us-east-2.amazonaws.com/wcar-images/cars-IMG_6949-scaled.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYL6ZDWQDRMZ7MAHD%2F20230816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230816T232502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5519b640c17c3e447e3530539602ee8057bafa7904d10930e1aa92bb8ba11cad",
                      "car": 1
                    }
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