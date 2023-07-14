import BookDateEntity from "../entities/BookDateEntity";
import BookHourEntity from "../entities/BookHourEntity";

export default interface BookRepository {
    getAvailableDatesForBuy(carId: string): Promise<BookDateEntity[]>;
    getAvailableHoursForBuy(date: Date, carId: string): Promise<BookHourEntity[]>;
    bookADateForBuy(date: Date, hour: string, carId: string, paymentId: string | undefined): Promise<void>;
    getavailableDatesForSell(cotizationId: string | undefined): Promise<BookDateEntity[]>;
    getAvailableHoursForSell(date: Date, cotizationId: string | undefined): Promise<BookHourEntity[]>;
    bookADateForSell(date: Date, hour: string, cotizationId: string | undefined ): Promise<void>;
}

export const BookRepositoryName = "BookRepository";