import { injectable } from "inversify";
import AllyRepository from "../../../../domain/repositories/AllyRepository";
import AllyEntity from "../../../../domain/entities/AllyEntity";
import GetAllAlliesApiImpl from "./api/GetAllAlliesApiImpl";

@injectable()
export default class AllyRepositoryImpl implements AllyRepository {
    getAll = (): Promise<AllyEntity[]> => GetAllAlliesApiImpl();
}