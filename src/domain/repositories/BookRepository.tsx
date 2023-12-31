/********************************************************************************
 * File Header - BookRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the BookRepository.
 * The books are the appointments that the user can reserve in buy or sell your car page.
 ********************************************************************************/

import BookDateEntity from "../entities/BookDateEntity";
import BookHourEntity from "../entities/BookHourEntity";

export default interface BookRepository {
    bookACar(carId: string): Promise<void>;
    getAvailableDatesForBuy(carId: string): Promise<BookDateEntity[]>;
    getAvailableHoursForBuy(bookDateId: string, carId: string): Promise<BookHourEntity[]>;
    bookADateForBuy(bookDateId: string, bookHourId: string, carId: string, contactInfo: any, paymentNumber: string): Promise<void>;
    bookADateForSee(bookDateId: string, bookHourId: string, carId: string, contactInfo: any): Promise<void>;
    getavailableDatesForSell(cotizationId: string | undefined): Promise<BookDateEntity[]>;
    getAvailableHoursForSell(bookDateId: string, cotizationId: string | undefined): Promise<BookHourEntity[]>;
    bookADateForSell(bookDateId: string, bookHourId: string, cotizationId: string | undefined, contactInfo: any): Promise<void>;
    confirmBookingBuy(bookId: string): Promise<void>;
}

export const BookRepositoryName = "BookRepository";