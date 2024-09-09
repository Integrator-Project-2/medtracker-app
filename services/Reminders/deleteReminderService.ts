import axios from 'axios';
import api from '../api';

export const deleteReminder = async (id: number) => {
    try {
        const url = `/medication-reminder/${id}/`;

        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};
