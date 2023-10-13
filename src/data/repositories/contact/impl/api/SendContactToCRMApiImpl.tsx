const SendContactToCRMApiImpl = async (data: any): Promise<void> => {
    await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
    });
}

export default SendContactToCRMApiImpl;