import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import BrandImplDto from "./BrandImplDto";
import ColorImplDto from "./ColorImplDto";
import PriceBookImplDto from "./PriceBookImplDto";
import TagImplDto from "./TagImplDto";
import TypeOfFueImpllDto from "./TypeOfFueImpllDto";
import TypeVehicleImplDto from "./TypeVehicleImplDto";

const fromJson = (json: any): CarEntity => {
    return {
        id: json.id,
        name: json.car,
        model: json.version,
        type: TypeVehicleImplDto.fromJson(json.type),
        photoUrl: json.files[0].image,
        images: json.files.map((file: any) => file.image),
        price: parseInt(json.price),
        transmission: json.type_car == 1 ? TransmissionCar.AUTOMATIC : TransmissionCar.MANUAL,
        year: json.model,
        rating: parseFloat(json.stars),
        odometer: json.mileage,
        brand: BrandImplDto.fromJson(json.brand_car),
        typeOfFuel: TypeOfFueImpllDto.fromJson(json.fuel_type),
        color: ColorImplDto.fromJson(json.color),
        priceBook: json.billing_car ? PriceBookImplDto.fromJson(json.billing_car) : undefined,
        description: json.description,
        tag: json.tag_car ? TagImplDto.fromJson(json.tag_car) : undefined,
        plate: json.tuition,
        doors: json.doors,
        motor: json.engine,
        status: json.status_vehicle == 1 ? 'Nuevo': 'Usado',
    }
}

export default {
    fromJson,
}