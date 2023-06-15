import BrandEntity from "./BrandEntity";
import ColorEntity from "./ColorEntity";
import TypeOfFuelEntity from "./TypeOfFuelEntity";
import TypeVehicleEntity from "./TypeVehicleEntity";

export enum TransmissionCar {
    AUTOMATIC = 'Automatico',
    MANUAL = 'Manual'
}

export default interface CarEntity {
    id: string;
    name: string;
    type: TypeVehicleEntity;
    photoUrl: string;
    price: number;
    transmission: TransmissionCar;
    year: number;
    like: boolean;
    odometer: number;
    brand: BrandEntity;
    typeOfFuel: TypeOfFuelEntity;
    color: ColorEntity;
}