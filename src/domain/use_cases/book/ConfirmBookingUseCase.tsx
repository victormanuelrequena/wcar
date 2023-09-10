import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class ConfirmBookingUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookId: string):Promise<void> {
        try {
            const response = await this._bookRepository.confirmBookingBuy(bookId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const ConfirmBookingUseCaseName = "ConfirmBookingUseCaseName";