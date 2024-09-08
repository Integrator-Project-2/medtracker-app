import axios from 'axios';


export const deleteReminder = async (id: number) => {
    try {
        const response = await axios.delete(`http://10.0.2.2:8000/api/medication-reminder/${id}/`);
        return response.data;
       
    } catch (error) {
        console.log('Axios error:', error);
    }
};
