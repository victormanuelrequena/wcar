export default interface ContactRepository {
    contact(name: string, lastname: string, phone: string, email: string, content: string): Promise<void>;
}

export const ContactRepositoryName = "ContactRepository";