import { injectable } from "inversify";
import BookHourEntity from "../../entities/BookHourEntity";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class GetAvailableHoursForBuyUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookDateId: string, carId: string): Promise<BookHourEntity[]> {
        try {
            const response = await this._bookRepository.getAvailableHoursForBuy(bookDateId, carId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAvailableHoursForBuyUseCaseName = "GetAvailableHoursForBuyUseCaseName";