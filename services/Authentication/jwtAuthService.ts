import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const baseURL = BASE_URL;

export async function loginUser(email: string, password: string) {
    try {
        const response = await axios.post(`${baseURL}/token/`, {
            email: email,
            password: password,
        });

        if (response.data) {
            const { access, refresh } = response.data;
            return { access, refresh };
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            // Verifica se o erro é do axios e tem uma resposta válida
            console.error('Login failed', error.response.data);
        } else {
            console.error('An unexpected error occurred', error);
        }

        throw new Error('Failed to authenticate');
    }
}
