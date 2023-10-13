import CarEntity, { TransmissionCar } from "../../../domain/entities/CarEntity";
import BrandImplDto from "./BrandImplDto";
import ModelImplDto from "./ModelImplDto";
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
        photoUrl: json.image_first,
        images: json.files.map((file: any) => file.image),
        price: parseInt(json.price),
        transmission: json.transmission == 1 ? TransmissionCar.AUTOMATIC : TransmissionCar.MANUAL,
        year: ModelImplDto.fromJson(json.model_car).name,
        rating: parseFloat(json.stars),
        odometer: json.mileage,
        brand: BrandImplDto.fromJson(json.brand_car),
        typeOfFuel: TypeOfFueImpllDto.fromJson(json.fuel_type),
        color: ColorImplDto.fromJson(json.color_car),
        priceBook: json.billing_car ? PriceBookImplDto.fromJson(json.billing_car) : undefined,
        description: json.description,
        tag: json.tag_car ? TagImplDto.fromJson(json.tag_car) : undefined,
        plate: json.tuition.slice(-1),
        fullPlate: json.tuition,
        doors: json.doors,
        motor: json.engine,
        status: json.status_vehicle == 1 ? 'Nuevo' : 'Usado',
        discount: json.discount_price != null && json.discount_price != "0.00" ? parseFloat(json.discount_price) : undefined,
    }
}

const toJson = (car: CarEntity): any => {
    return {
        id: car.id,
        name: car.name,
        model: car.model,
        type: TypeVehicleImplDto.toJson(car.type),
        image_first: car.photoUrl,
        images: car.images,
        price: car.price,
        transmission: car.transmission == TransmissionCar.AUTOMATIC,
        year: car.year,
        rating: car.rating,
        odometer: car.odometer,
        brand: BrandImplDto.toJson(car.brand),
        typeOfFuel: TypeOfFueImpllDto.toJson(car.typeOfFuel),
        color_car: ColorImplDto.toJson(car.color),
        priceBook: car.priceBook ? PriceBookImplDto.toJson(car.priceBook) : undefined,
        description: car.description,
        tag: car.tag ? TagImplDto.toJson(car.tag) : undefined,
        plate: car.plate,
        doors: car.doors,
        motor: car.motor,
        status: car.status == "Nuevo" ? 1 : 2,
    }
}

export default {
    fromJson,
    toJson,
}