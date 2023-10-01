import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";

interface props {
    bookRepository: BookRepository,
}

@injectable()
export default class BookACarUseCase {

    _bookRepository: BookRepository;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
    }
    async call(carId: string): Promise<void> {
        try {
            const responseBook = await this._bookRepository.bookACar(carId);
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

export const BookACarUseCaseName = "BookACarUseCaseName";