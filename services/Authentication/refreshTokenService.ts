import axios from 'axios';
import { storeToken } from './signInService';
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'default_url';

const refreshTokenService = async (refreshToken: string) => {
    try {
        const response = await axios.post(`${apiUrl}token/refresh/`, 
            { refresh: refreshToken },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Resposta da API:', response.data);

        const { access, refresh } = response.data;

        if (access) {
            await storeToken(access, refresh || ''); 
        } else {
            console.error('Token de acesso não recebido da resposta do servidor.');
        }

        return { access, refresh };
    } catch (error) {
        console.error('Erro ao atualizar o token:', error);
        throw error;
    }
};

export default refreshTokenService;
