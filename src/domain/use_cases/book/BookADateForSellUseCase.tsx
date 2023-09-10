import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class BookADateForSellUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookDateId: string, bookHourId: string, cotizationId: string | undefined, password: string, contactInfo: any):Promise<void> {
        try {
            const response = await this._bookRepository.bookADateForSell(bookDateId, bookHourId, cotizationId, password, contactInfo);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const BookADateForSellUseCaseName = "BookADateForSellUseCaseName";