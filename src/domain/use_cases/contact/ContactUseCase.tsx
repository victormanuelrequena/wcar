import { injectable } from "inversify";
import ContactRepository from "../../repositories/ContactRepository";

interface props {
    contactRepository: ContactRepository;
}
@injectable()
export default class ContactUseCase {
    _contactRepository: ContactRepository;

    constructor(_:props) {
        this._contactRepository = _.contactRepository;
    }

    async call(name: string, lastname: string, phone: string, email:string, content: string): Promise<void> {
        return await this._contactRepository.contact(name, lastname, phone, email, content);
    }
}

export const ContactUseCaseName = "ContactUseCaseName";