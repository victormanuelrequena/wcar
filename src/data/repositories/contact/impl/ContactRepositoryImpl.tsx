import { injectable } from "inversify";
import ContactRepository from "../../../../domain/repositories/ContactRepository";
import SendContactFormApiImpl from "./api/SendContactFormApiImpl";

@injectable()
export default class ContactRepositoryImpl implements ContactRepository {
    contact = (name: string, lastname: string, phone: string, email: string, content: string): Promise<void> => SendContactFormApiImpl(name, lastname, phone, email, content);
}