import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import refreshTokenService from './Authentication/refreshTokenService';
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'default_url';

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Função para obter o token
const getToken = async () => {
    try {
        const accessToken = await SecureStore.getItemAsync('authToken');
        const refreshToken = await SecureStore.getItemAsync('refreshToken');

        return { accessToken, refreshToken };
    } catch (error) {
        console.error('Erro ao recuperar o token:', error);
        return { accessToken: null, refreshToken: null };
    }
};

// Interceptor de requisição para adicionar o token a cada requisição
api.interceptors.request.use(async (config) => {
    const { accessToken } = await getToken();
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Interceptor de resposta para lidar com erros de autenticação
api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const { refreshToken } = await getToken();
                if (refreshToken) {
                    const { access } = await refreshTokenService(refreshToken);

                    originalRequest.headers['Authorization'] = `Bearer ${access}`;

                    // Reenviar a requisição original com o novo token
                    return api(originalRequest);
                } else {
                    console.error('Refresh token não disponível.');
                }
            } catch (err) {
                console.error('Erro ao atualizar o token:', err);
            }
        }

        return Promise.reject(error);
    }
);
