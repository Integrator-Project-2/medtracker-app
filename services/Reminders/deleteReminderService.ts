import axios from 'axios';


export const deleteReminder = async (id: number) => {
    try {
        const response = await axios.delete(`http://10.0.2.2:8000/api/medication-reminder/${id}/`);
        if (response.status === 204) {
            console.log('Reminder deleted successfully');
        } else {
            console.error('Unexpected response status:', response.status);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};
