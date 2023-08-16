import { injectable } from "inversify";
import BookDateEntity from "../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../domain/entities/BookHourEntity";
import BookRepository from "../../../domain/repositories/BookRepository";
import sleeper from "../../../domain/repositories/utils/Sleeper";

const _testHours: BookHourEntity[] = [
    {
        hour: "8am - 10am",
        available: true
    },
    {
        hour: "10am - 12pm",
        available: false,
    },
    {
        hour: "12pm - 2pm",
        available: true
    },
    {
        hour: "2pm - 4pm",
        available: true
    },
    {
        hour: "4pm - 6pm",
        available: false
    },
];

const _testDates: BookDateEntity[] = [
    {
        date: new Date(2020, 11, 1),
        available: true,
    },
    {
        date: new Date(2020, 11, 2),
        available: false,
    },
    {
        date: new Date(2020, 11, 3),
        available: true,
    },
    {
        date: new Date(2020, 11, 4),
        available: true,
    },
    {
        date: new Date(2020, 11, 5),
        available: false,
    },
];

@injectable()
export default class BookRepositoryDev implements BookRepository {
    async getAvailableDatesForBuy(carId: string): Promise<BookDateEntity[]> {
        await sleeper(1000)(1);
        return _testDates;
    }
    async getAvailableHoursForBuy(date: Date, carId: string): Promise<BookHourEntity[]> {
        await sleeper(1000)(1);
        return _testHours;
    }
    async bookADateForBuy(date: Date, hour: string, carId: string, paymentId: string | undefined, contactInfo: any): Promise<void> {
        await sleeper(1000)(1);
        return;
    }
    async getavailableDatesForSell(cotizationId: string | undefined): Promise<BookDateEntity[]> {
        await sleeper(1000)(1);
        return _testDates;
    }
    async getAvailableHoursForSell(date: Date, cotizationId: string | undefined): Promise<BookHourEntity[]> {
        await sleeper(1000)(1);
        return _testHours;
    }
    async bookADateForSell(date: Date, hour: string, cotizationId: string | undefined, contactInfo: any ): Promise<void> {
        await sleeper(1000)(1);
        return;
     }
    
}