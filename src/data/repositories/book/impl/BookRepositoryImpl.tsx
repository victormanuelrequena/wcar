import { injectable } from "inversify";
import BookRepository from "../../../../domain/repositories/BookRepository";
import BookDateEntity from "../../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../../domain/entities/BookHourEntity";
import GetAvailableDatesForBuyApiIpml from "./api/GetAvailableDatesForBuyApiIpml";

@injectable()
export default class BookRepositoryImpl implements BookRepository {
    getAvailableDatesForBuy = (carId: string): Promise<BookDateEntity[]> => GetAvailableDatesForBuyApiIpml(carId);
    getAvailableHoursForBuy = (date: Date, carId: string): Promise<BookHourEntity[]> => {
        throw new Error = ("Method not implemented.");
    }
    bookADateForBuy = (date: Date, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> => {
        throw new Error = ("Method not implemented.");
    }
    getavailableDatesForSell = (cotizationId: string | undefined): Promise<BookDateEntity[]> => {
        throw new Error = ("Method not implemented.");
    }
    getAvailableHoursForSell = (date: Date, cotizationId: string | undefined): Promise<BookHourEntity[]> => {
        throw new Error = ("Method not implemented.");
    }
    bookADateForSell = (date: Date, hour: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => {
        throw new Error = ("Method not implemented.");
    }

}