import BrandEntity from "./BrandEntity";
import ColorEntity from "./ColorEntity";
import PriceBookEntity from "./PriceBookEntity";
import TagEntity from "./TagEntity";
import TypeOfFuelEntity from "./TypeOfFuelEntity";
import TypeVehicleEntity from "./TypeVehicleEntity";

export enum TransmissionCar {
    AUTOMATIC = "Automática",
    MANUAL = "Manual",
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
    year: any;
    rating: number;
    odometer: number;
    brand: BrandEntity;
    typeOfFuel: TypeOfFuelEntity;
    color: ColorEntity;
    priceBook?: PriceBookEntity | undefined;
    description: string;
    tag?: TagEntity | undefined;
    plate: string;
    fullPlate?: string | undefined;
    doors: number;
    motor: string;
    status: string;
    discount_price?: number | undefined;
    url_expertise?: string | null;
    expertise?: string | null;
    id_colserauto?: string | null;
    claims?: boolean;
    amount_claims?: number;
    warranty?: boolean;
    type_warranty?: string;
}
