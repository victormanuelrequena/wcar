/********************************************************************************
 * File Header - ContactRepository.tsx
 * Created By: Marlon Alejandro Mendez Castañeda
 * Contact: +57 3234686680
 * Date: August 9, 2023
 *
 * Description:
 * This file contains the interface for the ContactRepository.
 * A contact are a user who submitted their data on contact us page.
 ********************************************************************************/

export default interface ContactRepository {
    contact(name: string, lastname: string, phone: string, email: string, content: string): Promise<void>;
}

export const ContactRepositoryName = "ContactRepository";