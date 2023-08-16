import { injectable } from "inversify";
import BookRepository from "../../../../domain/repositories/BookRepository";
import BookDateEntity from "../../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../../domain/entities/BookHourEntity";
import GetAvailableDatesForBuyApiIpml from "./api/GetAvailableDatesForBuyApiIpml";
import GetAvailableHoursForBuyApiImpl from "./api/GetAvailableHoursForBuyApiImpl";
import BookADateForBuy from "./api/BookADateForBuyApiImpl";
import GetAvailableHoursForSellApiImpl from "./api/GetAvailableHoursForSellApiImpl";
import GetAvailableDatesForSellApiImpl from "./api/GetAvailableDatesForSellApiImpl";
import BookADateForSellApiImpl from "./api/BookADateForSellApiImpl";

@injectable()
export default class BookRepositoryImpl implements BookRepository {
    getAvailableDatesForBuy = (carId: string): Promise<BookDateEntity[]> => GetAvailableDatesForBuyApiIpml(carId);
    getAvailableHoursForBuy = (date: Date, carId: string): Promise<BookHourEntity[]> => GetAvailableHoursForBuyApiImpl(date, carId);
    bookADateForBuy = (date: Date, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> => BookADateForBuy(date, hour, carId, paymentId, contactInfo);
    getavailableDatesForSell = (cotizationId: string | undefined): Promise<BookDateEntity[]> => GetAvailableDatesForSellApiImpl(cotizationId);
    getAvailableHoursForSell = (date: Date, cotizationId: string | undefined): Promise<BookHourEntity[]> => GetAvailableHoursForSellApiImpl(date, cotizationId);
    bookADateForSell = (date: Date, hour: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => BookADateForSellApiImpl(date, hour, cotizationId, contactInfo);

}