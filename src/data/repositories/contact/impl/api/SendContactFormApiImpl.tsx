import HostApi from "../../../../settings/HostApi";

//TODO API
const SendContactFormApiImpl = async (name: string, lastname: string, phone: string, email: string, content: string): Promise<void> => {
    const relativeUrl = "";
    const body = {
        "name": name,
        "lastname": lastname,
        "phone": phone,
        "email": email,
        "content": content,
    };
    const response = await HostApi.post(relativeUrl, body);
}

export default SendContactFormApiImpl;