export enum TransmissionCar {
    AUTOMATIC = 'Automatico',
    MANUAL = 'Manual'
}

export default interface CarEntity {
    id: string;
    name: string;
    type: string;
    photoUrl: string;
    price: number;
    transmission: TransmissionCar;
    year: number;
    like: boolean;
    odometer: number;
}