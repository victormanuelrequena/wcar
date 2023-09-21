import { injectable } from "inversify";
import ContactRepository from "../../repositories/ContactRepository";

interface props {
    contactRepository: ContactRepository;
}
@injectable()
export default class ContactByCRMUseCase {
    _contactRepository: ContactRepository;

    constructor(_:props) {
        this._contactRepository = _.contactRepository;
    }

    async call(data: any): Promise<void> {
        return await this._contactRepository.contactByCRM(data);
    }
}

export const ContactByCRMUseCaseName = "ContactByCRMUseCaseName";