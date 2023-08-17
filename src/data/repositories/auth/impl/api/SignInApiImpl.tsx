import UserImplDto from "../../../../dto/impl/UserImplDto";
import HostApi from "../../../../settings/HostApi";
import { Either, right, left } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";
import UserEntity from "../../../../../domain/entities/UserEntity";

//TODO API
const SignInApiImpl = async (email: string, password: string): Promise<Either<ExceptionEntity, UserEntity>> => {
    const relativeUrl = "/login";
    try {
        // const response = await HostApi.post(relativeUrl, {
        //     "email": email,
        //     "password": password,
        // });
        const response = {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODE5MDQyLCJpYXQiOjE2OTIyMjcwNDIsImp0aSI6ImViN2FmYTU5Y2JiYzRlYzdiZjU1OGZjZmQ1NjY2Mjg2IiwidXNlcl9pZCI6MX0.xRwxkxOO9U1PKLifwnok1ugbAL_bxRd9Rpzsdu17L2A",
            "user": {
                "id": 1,
                "name": "Admin",
                "email": "admin@wcar.com",
                "phone": "04127592499",
                "role": "Admin"
            }
        }
        HostApi.setToken(response.token);
        const parsed = UserImplDto.fromJson(response.user);
        return right(parsed);
    } catch (error) {
        return left({ message: 'Credencial invalida' });
    }
}

export default SignInApiImpl;