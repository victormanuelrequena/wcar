import AllyEntity from "../entities/AllyEntity";

export default interface AllyRepository {
    getAll(): Promise<AllyEntity[]>;
}

export const AllyRepositoryName = "AllyRepository";