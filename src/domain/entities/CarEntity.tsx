import BrandEntity from "./BrandEntity";
import ColorEntity from "./ColorEntity";
import PriceBookEntity from "./PriceBoookEntity";
import TypeOfFuelEntity from "./TypeOfFuelEntity";
import TypeVehicleEntity from "./TypeVehicleEntity";

export enum TransmissionCar {
    AUTOMATIC = 'Automatico',
    MANUAL = 'Manual'
}

export default interface CarEntity {
    id: string;
    name: string;
    model: string;
    type: TypeVehicleEntity;
    photoUrl: string;
    images: string[];
    price: number;
    transmission: TransmissionCar;
    year: number;
    like: boolean;
    rating: number;
    odometer: number;
    brand: BrandEntity;
    typeOfFuel: TypeOfFuelEntity;
    color: ColorEntity;
    outstanding: boolean;
    priceBook?: PriceBookEntity | undefined;
    description: string[];
}