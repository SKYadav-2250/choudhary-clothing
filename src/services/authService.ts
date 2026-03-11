import api from './api';
import Cookies from 'js-cookie';

export const authService = {
    login: async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.data && response.data.success && response.data.data) {
                const { user, token } = response.data.data;
                Cookies.set('token', token, { expires: 30 }); // Save token in cookie
                localStorage.setItem('user', JSON.stringify(user)); // Save user data for UI
                return user;
            }
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error('Login failed. Please check your credentials.');
        }
    },

    register: async (name: string, email: string, password: string) => {
        try {
            const response = await api.post('/auth/register', { name, email, password });
            if (response.data && response.data.success && response.data.data) {
                const { user, token } = response.data.data;
                Cookies.set('token', token, { expires: 30 }); // Save token in cookie
                localStorage.setItem('user', JSON.stringify(user)); // Save user data for UI
                return user;
            }
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error('Registration failed. Please try again.');
        }
    },

    logout: () => {
        Cookies.remove('token');
        localStorage.removeItem('user');
    },

    getUser: () => {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (e) {
                return null;
            }
        }
        return null;
    }
};
