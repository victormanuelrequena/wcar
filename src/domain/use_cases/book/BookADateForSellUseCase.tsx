import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

export default class BookADateForSellUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(date: Date, hour: string, cotizationId: string | undefined, contactInfo: any):Promise<void> {
        try {
            const response = await this._bookRepository.bookADateForSell(date, hour, cotizationId, contactInfo);
            return response;
        } catch (error) {
            throw error;
        }
    }
}