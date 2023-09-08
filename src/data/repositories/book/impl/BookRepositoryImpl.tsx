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
    getAvailableHoursForBuy = (bookDateId: string, carId: string): Promise<BookHourEntity[]> => GetAvailableHoursForBuyApiImpl(bookDateId, carId);
    bookADateForBuy = (bookDateId: string, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> => BookADateForBuy(bookDateId, hour, carId, paymentId, contactInfo);
    getavailableDatesForSell = (cotizationId: string | undefined): Promise<BookDateEntity[]> => GetAvailableDatesForSellApiImpl(cotizationId);
    getAvailableHoursForSell = (bookDateId: string, cotizationId: string | undefined): Promise<BookHourEntity[]> => GetAvailableHoursForSellApiImpl(bookDateId, cotizationId);
    bookADateForSell = (bookDateId: string, hour: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => BookADateForSellApiImpl(bookDateId, hour, cotizationId, contactInfo);

}