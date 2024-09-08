import { ReminderRecord } from '@/types/ReminderRecord';
import axios from 'axios';


const BASE_URL = 'http://10.0.2.2:8000/api/medication-reminder-record'; 

export const fetchReminderRecords = async (patientId: number): Promise<ReminderRecord[]> => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
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
        const response = await axios.get(`${BASE_URL}`, {
            params: { reminder_id: reminderId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reminders:", error);
        throw error;
    }
};

export const fetchUpcomingReminderRecord = async (patientId: number): Promise<ReminderRecord> => {
    try {
        const response = await axios.get(`${BASE_URL}/upcoming/`, {
            params: { patient_id: patientId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reminders:", error);
        throw error;
    }
};

