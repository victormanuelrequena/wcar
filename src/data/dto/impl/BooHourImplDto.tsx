import BookHourEntity from "../../../domain/entities/BookHourEntity";

const convertToAmPm = (hour: string): string => {
    //from 24h hh:mm to 12h hh:mm
    const [h, m] = hour.split(":");
    const hours = Number(h);
    const minutes = Number(m);
    const ampm = hours >= 12 ? "pm" : "am";
    const hours12 = hours % 12 || 12;
    const minutes12 = minutes < 10 ? "0" + minutes : minutes;
    return hours12 + ":" + minutes12 + ampm;
}

const convertTo24h = (hour: string): string => {
    //from 12h hh:mm to 24h hh:mm
    const [h, m] = hour.split(":");
    const hours = Number(h);
    const minutes = Number(m);
    const ampm = hour.slice(-2);
    const hours24 = (hours % 12) + (ampm === "pm" ? 12 : 0);
    const minutes24 = minutes < 10 ? "0" + minutes : minutes;
    return hours24 + ":" + minutes24;
}
const fromJson = (json: any): BookHourEntity => {
    return {
        hourFrom: convertToAmPm(json.hour_from.substring(0, 5)),
        hourTo: convertToAmPm(json.hour_to.substring(0, 5)),
        id: json.id,
        available: true,
        bookDateId: json.date,
    }
}

const toJson = (entity: BookHourEntity): any => {
    return {
        hour_from: convertTo24h(entity.hourFrom) + ":00",
        hour_to: convertTo24h(entity.hourTo) + ":00",
        id: entity.id,
        available: entity.available,
        date: entity.bookDateId,
    }
}

export default {
    fromJson,
    toJson,
}