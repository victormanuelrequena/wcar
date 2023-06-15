import BrandEntity from "../entities/BrandEntity";

export default interface BrandRepository {
    getAll(): Promise<BrandEntity[]>;
}