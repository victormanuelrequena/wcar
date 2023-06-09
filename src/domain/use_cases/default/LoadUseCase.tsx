import GetAllAlliesUseCase from "../ally/GetAllAlliesUseCase";

interface props {
    getAllAlliesUseCase: GetAllAlliesUseCase,
}

export default class LoadUseCase {
    _getAllAlliesUseCase: GetAllAlliesUseCase;

    constructor(_: props) {
        this._getAllAlliesUseCase = _.getAllAlliesUseCase;
    }

    async call() {
        await this._getAllAlliesUseCase.call();
    }
}