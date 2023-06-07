import GetAllAlliesUseCase from "../ally/GetAllAlliesUseCase";

interface props {
    getAllAlliesUseCase: GetAllAlliesUseCase,
}

export default class LoadUseCase {
    _getAllAlliesUseCase: GetAllAlliesUseCase;

    constructor(_: props) {
        this._getAllAlliesUseCase = _.getAllAlliesUseCase;
    }

    async execute() {
        await this._getAllAlliesUseCase.call();
    }
}