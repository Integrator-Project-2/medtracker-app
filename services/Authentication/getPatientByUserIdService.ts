import { api } from "../api";
import * as SecureStore from 'expo-secure-store';

export const fetchPatientByUserId = async () => {
    try {
    
        const userId = await SecureStore.getItemAsync('userId');

        if (userId) {
          
            const response = await api.get(`users/linked_patient/${userId}/`);
            
            return response.data;
        } else {
            throw new Error('User ID não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar paciente:', error);
        throw error;
    }
};
