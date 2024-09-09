import axios from 'axios';
import api from '../api'; 

export const markMedicationAsTaken = async (id: number) => {
    try {
      
        const url = `take-medication/${id}/`;
        const response = await api.post(url);
        
        console.log(`Response received:`, response.data);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers,
            });
        } else {
            console.error('Unexpected error:', error);
        }

        throw new Error('Failed to mark medication as taken');
    }
};
