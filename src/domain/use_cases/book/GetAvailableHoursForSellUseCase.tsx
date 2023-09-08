import { injectable } from "inversify";
import BookHourEntity from "../../entities/BookHourEntity";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class GetAvailableHoursForSellUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookDateId: string, cotizationId: string| undefined):Promise<BookHourEntity[]> {
        try {
            const response = await this._bookRepository.getAvailableHoursForSell
            (bookDateId, cotizationId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAvailableHoursForSellUseCaseName = "GetAvailableHoursForSellUseCaseName";