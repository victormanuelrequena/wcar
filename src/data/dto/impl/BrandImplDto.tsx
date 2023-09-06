import BrandEntity from "../../../domain/entities/BrandEntity";

const fromJson = (brand: any): BrandEntity => {
    return {
        id: brand.id,
        name: brand.brand,
        image: brand.image,
    }
}

const toJson = (brand: BrandEntity): any => {
    return {
        id: brand.id,
        brand: brand.name,
        image: brand.image,
    }
}

export default {
    fromJson,
    toJson,
}