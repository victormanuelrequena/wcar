import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class BookADateForSeeUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(bookDateId: string, bookHourId: string, carId: string, contactInfo: any): Promise<void> {
        try {
            const responseBook = await this._bookRepository.bookADateForSee(bookDateId, bookHourId, carId, contactInfo);
            // if (this._userProvider.Actions.user == null) {
            //     di.get<SignInUseCase>(SignInUseCaseName).call(contactInfo.email, password);
            // }
            return responseBook;
        } catch (error) {
            console.log('pasa como error en use case', error);
            throw error;
        }
    }
}

export const BookADateForSeeUseCaseName = "BookADateForSeeUseCaseName";