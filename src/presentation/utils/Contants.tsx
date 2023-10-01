import CarEntity from "../../domain/entities/CarEntity";

export const SLOGAN = "Más que vender, te aconsejamos";
export const getUrlCar = (car:CarEntity) => {
    let carUrl = `${car.type.name}/${car.name}/${car.id}`;
    carUrl = carUrl.replace(/ /g, '-').toLowerCase();
    return carUrl;
}

