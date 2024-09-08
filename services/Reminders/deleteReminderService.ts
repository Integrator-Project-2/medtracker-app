import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api/medication-reminder/';

export const deleteReminder = async (id: number) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error('Error deleting reminder:', error);
        throw error;
    }
};