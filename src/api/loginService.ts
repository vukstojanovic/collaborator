import apiInstance from './api';
import history from '../CustomRouter/history';

type loginType = {
    email: string;
    password: string;
};

const login = async ({ email, password }: loginType) => {
    let response;
    try {
        response = await apiInstance.post('/auth/login', {
            email: email,
            password: password,
        });

        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
    if (response?.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        history.replace('/');
    } else {
        history.replace('/signup');
    }
};

export default login;
