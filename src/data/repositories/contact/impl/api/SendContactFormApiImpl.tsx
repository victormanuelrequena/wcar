import HostApi from "../../../../settings/HostApi";

const SendContactFormApiImpl = async (name: string, lastname: string, phone: string, email: string, content: string): Promise<void> => {
    const relativeUrl = "/contact/create";
    const body = {
        "name": name,
        "last_name": lastname,
        "phone": phone,
        "email": email,
        "content": content,
    };
    await HostApi.post(relativeUrl, body);
}

export default SendContactFormApiImpl;