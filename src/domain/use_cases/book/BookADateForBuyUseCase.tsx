import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

export default class BookADateForBuyUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(date: Date, hour: string, carId: string):Promise<void> {
        try {
            const response = await this._bookRepository.bookADateForBuy(date, hour, carId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}