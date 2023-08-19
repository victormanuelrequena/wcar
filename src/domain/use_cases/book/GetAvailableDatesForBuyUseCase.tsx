import { injectable } from "inversify";
import BookDateEntity from "../../entities/BookDateEntity";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class GetAvailableDatesForBuyUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(carId: string):Promise<BookDateEntity[]> {
        try {
            const response = await this._bookRepository.getAvailableDatesForBuy(carId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAvailableDatesForBuyUseCaseName = "GetAvailableDatesForBuyUseCaseName";