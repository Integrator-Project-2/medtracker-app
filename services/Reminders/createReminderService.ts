import axios from 'axios';
import api from '../api';
import { Reminder } from '@/types/Reminder';

export const createMedicationReminder = async (reminder: Reminder): Promise<Reminder> => {
    try {
        const url = 'medication-reminder/';

        const response = await api.post<Reminder>(url, reminder);
        console.log('API Response:', response.data); 
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error creating medication reminder:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
