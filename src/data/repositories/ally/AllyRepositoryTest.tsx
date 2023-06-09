import { injectable } from "inversify";
import AllyRepository from "../../../domain/repositories/AllyRepository";
import AllyEntity from "../../../domain/entities/AllyEntity";

const _allyTest:AllyEntity = {
    url_image: "https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png",
}
@injectable()
class AllyRepositoryTest implements AllyRepository{
    async getAll(): Promise<AllyEntity[]> {
        return [_allyTest, _allyTest, _allyTest, _allyTest, _allyTest, _allyTest, _allyTest, _allyTest, _allyTest, _allyTest];
    }
}

export default AllyRepositoryTest;