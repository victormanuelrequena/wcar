import { injectable } from "inversify";
import BookDateEntity from "../../entities/BookDateEntity";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class GetAvailableDatesForSellUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(cotizationId: string| undefined):Promise<BookDateEntity[]> {
        try {
            const response = await this._bookRepository.getavailableDatesForSell(cotizationId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export const GetAvailableDatesForSellUseCaseName = "GetAvailableDatesForSellUseCaseName";