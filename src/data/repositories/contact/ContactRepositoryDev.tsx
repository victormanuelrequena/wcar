import { injectable } from "inversify";
import ContactRepository from "../../../domain/repositories/ContactRepository";
import SendContactToCRMApiImpl from "./impl/api/SendContactToCRMApiImpl";
import SendContactFormApiImpl from "./impl/api/SendContactFormApiImpl";

@injectable()
export default class ContactRepositoryDev implements ContactRepository {
    contactByCRM = (data: any): Promise<void> => SendContactToCRMApiImpl(data);
    contact = (name: string, lastname: string, phone: string, email: string, content: string): Promise<void> => SendContactFormApiImpl(name, lastname, phone, email, content);
}