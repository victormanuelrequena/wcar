import { injectable } from "inversify";
import BookDateEntity from "../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../domain/entities/BookHourEntity";
import BookRepository from "../../../domain/repositories/BookRepository";
import sleeper from "../../../domain/repositories/utils/Sleeper";

const _testHours: BookHourEntity[] = [
    {
        hourFrom: "8am",
        hourTo: "10am",
        id: "1",
        available: true
    },
    {
        hourFrom: "8am",
        hourTo: "10am",
        id: "1",
        available: false,
    },
    {
        hourFrom: "8am",
        hourTo: "10am",
        id: "1",
        available: true
    },
    {
        hourFrom: "8am",
        hourTo: "10am",
        id: "1",
        available: true
    },
    {
        hourFrom: "8am",
        hourTo: "10am",
        id: "1",
        available: false
    },
];

const _testDates: BookDateEntity[] = [
    {
        id: "1",
        date: new Date(2020, 11, 1),
        available: true,
    },
    {
        id: "1",
        date: new Date(2020, 11, 2),
        available: false,
    },
    {
        id: "1",
        date: new Date(2020, 11, 3),
        available: true,
    },
    {
        id: "1",
        date: new Date(2020, 11, 4),
        available: true,
    },
    {
        id: "1",
        date: new Date(2020, 11, 5),
        available: false,
    },
];

@injectable()
export default class BookRepositoryTest implements BookRepository {
    async bookACar(carId: string): Promise<void> {
        await sleeper(1000)(1);
        window.location.href = '/carro/cita/' + "separar" + '/' + carId
        return;
    }
    async bookADateForSee(bookDateId: string, bookHourId: string, carId: string, contactInfo: any): Promise<void> {
        await sleeper(1000)(1);
        return;
    }
    async getAvailableDatesForBuy(carId: string): Promise<BookDateEntity[]> {
        await sleeper(1000)(1);
        return _testDates;
    }
    async getAvailableHoursForBuy(bookDateId: string, carId: string): Promise<BookHourEntity[]> {
        await sleeper(1000)(1);
        return _testHours;
    }
    async bookADateForBuy(bookDateId: string, bookHourId: string, carId: string, contactInfo: any, paymentNumber: string): Promise<void> {
        await sleeper(1000)(1);
        return;
    }
    async getavailableDatesForSell(cotizationId: string | undefined): Promise<BookDateEntity[]> {
        await sleeper(1000)(1);
        return _testDates;
    }
    async getAvailableHoursForSell(bookDateId: string, cotizationId: string | undefined): Promise<BookHourEntity[]> {
        await sleeper(1000)(1);
        return _testHours;
    }
    async bookADateForSell(bookDateId: string, hour: string, cotizationId: string | undefined, contactInfo: any): Promise<void> {
        await sleeper(1000)(1);
        return;
    }
    async confirmBookingBuy(bookId: string): Promise<void> {
        await sleeper(1000)(1);
        return;
    }

}