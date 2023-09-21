import { injectable } from "inversify";
import AllyRepository from "../../../domain/repositories/AllyRepository";
import AllyEntity from "../../../domain/entities/AllyEntity";
import GetAllAlliesApiImpl from "./impl/api/GetAllAlliesApiImpl";

const _allyTest:AllyEntity = {
    id: "1",
    url_image: "https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png",
}
@injectable()
class AllyRepositoryDev implements AllyRepository{
    getAll = (): Promise<AllyEntity[]> => GetAllAlliesApiImpl();
}

export default AllyRepositoryDev;