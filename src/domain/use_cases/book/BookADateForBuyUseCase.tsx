import { injectable } from "inversify";
import BookRepository from "../../repositories/BookRepository";
import UserProvider from "../../providers/user/UserProvider";
import AuthRepository from "../../repositories/AuthRepository";
import { isRight } from "fp-ts/lib/Either";
import di from "../../../di/DependencyInjection";
import SignInUseCase, { SignInUseCaseName } from "../auth/SignInUseCase";

interface props {
    bookRepository: BookRepository,
    userProvider: UserProvider,
}

@injectable()
export default class BookADateForBuyUseCase {

    _bookRepository: BookRepository;
    _userProvider: UserProvider;

    constructor(_: props) {
        this._bookRepository = _.bookRepository;
        this._userProvider = _.userProvider;
    }
    async call(bookDateId: string, bookHourId: string, carId: string, password: string, contactInfo: any, separation: number | undefined): Promise<void> {
        try {
            const responseBook = await this._bookRepository.bookADateForBuy(bookDateId, bookHourId, carId, password, contactInfo, separation);
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

export const BookADateForBuyUseCaseName = "BookADateForBuyUseCaseName";