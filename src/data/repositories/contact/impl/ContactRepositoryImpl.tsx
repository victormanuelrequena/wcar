import { injectable } from "inversify";
import ContactRepository from "../../../../domain/repositories/ContactRepository";
import SendContactFormApiImpl from "./api/SendContactFormApiImpl";
import SendContactToCRMApiImpl from "./api/SendContactToCRMApiImpl";

@injectable()
export default class ContactRepositoryImpl implements ContactRepository {
    contactByCRM = (data: any): Promise<void> => SendContactToCRMApiImpl(data);
    contact = (name: string, lastname: string, phone: string, email: string, content: string): Promise<void> => SendContactFormApiImpl(name, lastname, phone, email, content);
}