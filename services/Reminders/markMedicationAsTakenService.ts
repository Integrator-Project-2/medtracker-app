import axios from 'axios';

const API_URL = 'http:10.0.2.2:8000/api/medication-reminder-record/';

export const markMedicationAsTaken = async (id: number) => {
    try {
        console.log(`Sending request to mark medication with ID ${id} as taken`);

        const response = await axios.post(`${API_URL}${id}/take-medication/`);
        
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
