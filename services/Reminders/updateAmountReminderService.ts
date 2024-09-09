import axios from 'axios';
import api from '../api'; 
import { AmountReminder } from '@/types/AmountReminder';

export const updateMedicationAmountReminder = async (
    reminderId: string,
    amountReminder: AmountReminder
): Promise<AmountReminder> => {
    try {
        const url = `/amount-reminder/${reminderId}/`;  // URL relativa, sem a base
        const response = await api.put<AmountReminder>(url, amountReminder);
        
        console.log('API Response:', response.data);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updating amount reminder:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
