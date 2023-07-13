import BookHourEntity from "../../entities/BookHourEntity";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

export default class GetAvailableHoursForBuyUseCase {
    
        _bookRepository: BookRepository;
    
        constructor(_: props) {
            this._bookRepository = _.bookRepository;
        }
        async call(date: Date, carId: string)
         {
            try {
                const response = await this._bookRepository.getAvailableHoursForBuy(date, carId);
                return response;
            } catch (error) {
                throw error;
            }
        }
    }