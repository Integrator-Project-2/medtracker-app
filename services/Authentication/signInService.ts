import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { api } from '../api';

const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'default_url';

export const storeToken = async (accessToken: string, refreshToken?: string, userId?: number) => {
    try {
        if (accessToken) {
            await SecureStore.setItemAsync('authToken', accessToken);
        }

        if (refreshToken) {
            await SecureStore.setItemAsync('refreshToken', refreshToken);
        }

        if (userId) {
            await SecureStore.setItemAsync('userId', userId.toString());
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

        const { access, refresh, user_id } = response.data;

        if (access && refresh && user_id) {
            await storeToken(access, refresh, user_id);

            return response;
        } else {
            console.error('Tokens ou user_id recebidos da resposta do servidor estão indefinidos ou nulos.');
        }

        return response;
    } catch (error: any) {
        if (error.response) {
            return error.response;
        } else {
            throw new Error('Erro ao se comunicar com o servidor.');
        }
    }
};
