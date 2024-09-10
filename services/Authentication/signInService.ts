import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'default_url';

export const storeToken = async (accessToken: string, refreshToken?: string) => {
    try {
        if (accessToken) {
            await SecureStore.setItemAsync('authToken', accessToken);
        }

        // Se o refreshToken não for fornecido, apenas ignore o armazenamento
        if (refreshToken) {
            await SecureStore.setItemAsync('refreshToken', refreshToken);
        }
    } catch (error) {
        console.error('Erro ao armazenar o token:', error);
    }
};

export const signInUserService = async (credentials: UserCredentials) => {
    try {
        const response = await axios.post(`${apiUrl}token/`, credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { access, refresh } = response.data;

        if (access && refresh) {
            await storeToken(access, refresh);
        } else {
            console.error('Tokens recebidos da resposta do servidor estão indefinidos ou nulos.');
        }

        console.log("Resposta do servidor:", response);

        return response;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};
