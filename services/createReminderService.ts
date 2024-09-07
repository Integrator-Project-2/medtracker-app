import axios from "axios";
import { Reminder } from "@/types/Reminder";

export const createMedicationReminder = async (reminder: Reminder): Promise<Reminder> => {
    try {
        const url = 'http://10.0.2.2:8000/api/medication-reminder/';

        const response = await axios.post<Reminder>(url, reminder, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
