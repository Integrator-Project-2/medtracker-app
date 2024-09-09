import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from 'react-native-dotenv';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        try {
            const token = ACCESS_TOKEN;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                // console.log('Using Token:', token);
                console.log('token funcionou');
            }
        } catch (error) {
            console.error('Error setting Authorization header', error);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
