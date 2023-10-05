const SendContactToCRMApiImpl = async (data: any): Promise<void> => {
    await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/html;charset=UTF-8'
        },
        body: new URLSearchParams(data).toString()
    });
}

export default SendContactToCRMApiImpl;