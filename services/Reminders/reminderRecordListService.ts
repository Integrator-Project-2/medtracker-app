import { ReminderRecord } from '@/types/ReminderRecord';
import { api } from '../api';
import axios from 'axios';

export const fetchReminderRecords = async (patientId: number): Promise<ReminderRecord[]> => {
    try {
        const url = `/medication-reminder-records/`; 

        const response = await api.get<ReminderRecord[]>(url, {
            params: { patient_id: patientId }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching reminder records:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        throw error; 
    }
};

export const fetchReminderRecordsByReminder = async (reminderId: number): Promise<ReminderRecord[]> => {
    try {
        const url = `/medication-reminder-records/`; 

        const response = await api.get<ReminderRecord[]>(url, {
            params: { reminder_id: reminderId }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching reminder records by reminder:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        throw error; 
    }
};

export const fetchUpcomingReminderRecord = async (patientId: number): Promise<ReminderRecord> => {
    try {
        const url = `/upcoming-reminder-record/`; 

        const response = await api.get<ReminderRecord>(url, {
            params: { patient_id: patientId }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching upcoming reminder record:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        throw error; 
    }
};
