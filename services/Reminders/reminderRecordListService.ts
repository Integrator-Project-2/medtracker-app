import { ReminderRecord } from '@/types/ReminderRecord';
import axios from 'axios';


const BASE_URL = 'http://10.0.2.2:8000/api'; 

export const fetchReminderRecords = async (patientId: number): Promise<ReminderRecord[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/medication-reminder-record/`, {
            params: { patient_id: patientId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reminders:", error);
        throw error;
    }
};

export const fetchReminderRecordsByReminder = async (reminderId: number): Promise<ReminderRecord[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/medication-reminder-record/`, {
            params: { reminder_id: reminderId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reminders:", error);
        throw error;
    }
};

