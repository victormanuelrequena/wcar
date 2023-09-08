import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class BookADateForBuyUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookDateId: string, hour: string, carId: string, buyNumberId: string | undefined, contactInfo: any, separation: number | undefined):Promise<void> {
        try {
            const response = await this._bookRepository.bookADateForBuy(bookDateId, hour, carId, buyNumberId, contactInfo, separation);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const BookADateForBuyUseCaseName = "BookADateForBuyUseCaseName";