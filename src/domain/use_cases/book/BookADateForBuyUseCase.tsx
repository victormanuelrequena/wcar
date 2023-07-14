import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

export default class BookADateForBuyUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(date: Date, hour: string, carId: string, buyNumberId: string | undefined, contactInfo: any):Promise<void> {
        try {
            const response = await this._bookRepository.bookADateForBuy(date, hour, carId, buyNumberId, contactInfo);
            return response;
        } catch (error) {
            throw error;
        }
    }
}