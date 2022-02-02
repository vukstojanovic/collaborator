import apiInstance from '@api/api';
import history from '@components/CustomRouter/history';

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
    } catch (error) {
        console.log(error);
    }
    if (response?.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('isAdmin', response.data.role);
        const role = localStorage.getItem('isAdmin');

        if (role == 'admin') {
            history.replace('/admin-overview');
        }
        if (role == 'user') {
            history.replace('/user-overview');
        }
    } else {
        history.replace('/signup');
    }
};

export default login;
