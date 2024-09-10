import axios from 'axios';
import { api } from '../api';

export const deleteMedicationAmountReminder = async (reminderId: string): Promise<void> => {
    try {
        const url = `/amount-reminder/${reminderId}/`;
        await api.delete(url);
        
        console.log(`Amount reminder with ID ${reminderId} was successfully deleted.`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error deleting amount reminder:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
