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
import ConfirmBookingBuyApiImpl from "./api/ConfirmBookingBuyApiImpl";
import BookACarApiImpl from "./api/BookACarApiImpl";
import BookADateForSeeApiImlp from "./api/BookADateForSeeApiImlp";

@injectable()
export default class BookRepositoryImpl implements BookRepository {
    bookACar = (carId: string): Promise<void> => BookACarApiImpl(carId);
    bookADateForSee = (bookDateId: string, bookHourId: string, carId: string, contactInfo: any): Promise<void> => BookADateForSeeApiImlp(bookDateId, bookHourId, carId, contactInfo);
    getAvailableDatesForBuy = (carId: string,): Promise<BookDateEntity[]> => GetAvailableDatesForBuyApiIpml(carId);
    getAvailableHoursForBuy = (bookDateId: string, carId: string): Promise<BookHourEntity[]> => GetAvailableHoursForBuyApiImpl(bookDateId, carId);
    bookADateForBuy = (bookDateId: string, bookHourId: string, carId: string, contactInfo: any, paymentId: string): Promise<void> => BookADateForBuy(bookDateId, bookHourId, carId, contactInfo, paymentId);
    getavailableDatesForSell = (cotizationId: string | undefined): Promise<BookDateEntity[]> => GetAvailableDatesForSellApiImpl(cotizationId);
    getAvailableHoursForSell = (bookDateId: string, cotizationId: string | undefined): Promise<BookHourEntity[]> => GetAvailableHoursForSellApiImpl(bookDateId, cotizationId);
    bookADateForSell = (bookDateId: string, bookHourId: string, cotizationId: string | undefined, contactInfo: any): Promise<void> => BookADateForSellApiImpl(bookDateId, bookHourId, cotizationId, contactInfo);
    confirmBookingBuy = (bookId: string): Promise<void> => ConfirmBookingBuyApiImpl(bookId);
}