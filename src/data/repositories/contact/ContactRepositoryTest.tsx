import { injectable } from "inversify";
import ContactRepository from "../../../domain/repositories/ContactRepository";

@injectable()
export default class ContactRepositoryTest implements ContactRepository {
    async contact(name: string, lastname: string, phone: string, email: string, content: string): Promise<void> {
        return undefined;
    }
}