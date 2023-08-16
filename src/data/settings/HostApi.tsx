import di from "../../di/DependencyInjection";
import AuthRepository, { AuthRepositoryName } from "../../domain/repositories/AuthRepository";

const url = "https://f1a5-190-207-59-154.ngrok-free.app/api";
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const AWS_COGNITO_TOKEN_KEY = "aws_cognito_token";
const AWS_COGNITO_EMAIL_KEY = "aws_cognito_email";

const getToken = () => window.localStorage.getItem(AWS_COGNITO_TOKEN_KEY) ?? "";
const getEmail = () => window.localStorage.getItem(AWS_COGNITO_EMAIL_KEY) ?? "";

const setToken = (token: string) => {
    window.localStorage.setItem(AWS_COGNITO_TOKEN_KEY, token);
    console.log('token', token)
};
const setEmail = (email: string) => window.localStorage.setItem(AWS_COGNITO_EMAIL_KEY, email);

const removeToken = () => window.localStorage.removeItem(AWS_COGNITO_TOKEN_KEY);
const removeEmail = () => window.localStorage.removeItem(AWS_COGNITO_EMAIL_KEY);

const _getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': getToken(),
    };
}

const refreshToken = async () => await di.get<AuthRepository>(AuthRepositoryName).refreshToken();

const checkToken = async (callback: Function): Promise<any> => {
    try {
        const response = await callback();
        return response;
    } catch (error: any) {
        if (error.message == "The incoming token has expired") {
            console.log('error', error);
            await refreshToken();
            return await callback();
        }
    }
}


const get = (relativeUrl: string): Promise<any> => new Promise((resolve, reject) => {
    const _petition = (): Promise<any> => new Promise((resolve, reject) => {
        fetch(url + relativeUrl, {
            // mode: 'cors',
            method: 'GET',
            headers: _getHeaders(),
        },).then(async response => {
            const body = await response.json();
            if (response.ok) {
                resolve(body?.body?.data);
            } else {
                reject(body);
            }
        }).catch((error) => reject(error));
    });
    checkToken(_petition).then((response) => resolve(response)).catch((error) => reject(error));
});


const post = (relativeUrl: string, body: any): Promise<any> => new Promise((resolve, reject) => {
    const _petition = (): Promise<any> => new Promise((resolve, reject) => {
        fetch(url + relativeUrl, {
            method: 'POST',
            headers: _getHeaders(),
            body: JSON.stringify(body),
        }).then(async response => {
            const body = await response.json();
            if (response.ok) {
                resolve(body?.body);
            } else {
                reject(body);
            }
        }).catch((error) => reject(error));
    });
    checkToken(_petition).then((response) => resolve(response)).catch((error) => reject(error));
});

const put = (relativeUrl: string, body: any): Promise<any> => new Promise((resolve, reject) => {
    const _petition = (): Promise<any> => new Promise((resolve, reject) => {
        fetch(url + relativeUrl, {
            method: 'PUT',
            headers: _getHeaders(),
            body: JSON.stringify(body),
        }).then(async response => {
            const body = await response.json();
            if (response.ok) {
                resolve(body);
            } else {
                reject(body);
            }
        }).catch((error) => reject(error));
    });
    checkToken(_petition).then((response) => resolve(response)).catch((error) => reject(error));
});

const remove = (relativeUrl: string): Promise<any> => new Promise((resolve, reject) => {
    const _petition = (): Promise<any> => new Promise((resolve, reject) => {
        fetch(url + relativeUrl, {
            method: 'DELETE',
            headers: _getHeaders(),
        }).then(async response => {
            const body = await response.json();
            if (response.ok) {
                resolve(body);
            } else {
                reject(body);
            }
        }).catch((error) => reject(error));
    });
    checkToken(_petition).then((response) => resolve(response)).catch((error) => reject(error));
});

const HostApi = {
    post,
    get,
    put,
    remove,
    getToken,
    getEmail,
    setToken,
    setEmail,
    removeToken,
    removeEmail,
}

export default HostApi;