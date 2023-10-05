const SendContactToCRMApiImpl = async (data: any): Promise<void> => {
    await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
        },
        body: JSON.stringify(data), // Convert the data to JSON
    });
}

export default SendContactToCRMApiImpl;