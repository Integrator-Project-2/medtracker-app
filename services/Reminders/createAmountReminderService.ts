import axios from 'axios';
import api from '../api';  // Ajuste o caminho conforme necessário
import { AmountReminder } from '@/types/AmountReminder';

export const createMedicationAmountReminder = async (amountReminder: AmountReminder): Promise<AmountReminder> => {
    try {
        const url = '/amount-reminder/'; 
        const response = await api.post<AmountReminder>(url, amountReminder);
        
        console.log('API Response:', response.data);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Verificar a mensagem de erro ou a estrutura da resposta de erro
            if (error.response?.status === 400 && error.response?.data?.medication?.includes('amount reminder with this medication already exists.')) {
                // Lançar um erro específico
                throw new Error('ExistingReminder');
            }
            console.error('Error creating amount reminder:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
