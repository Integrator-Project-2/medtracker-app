import axios from 'axios';

export const deleteReminder = async (reminderId: number): Promise<void> => {
    try {
        const url = `http://10.0.2.2:8000/api/medication-reminder/${reminderId}/`;

        console.log(`Deleting reminder with ID ${reminderId} from ${url}`);

        const response = await axios.delete(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 204) {
            console.log(`Lembrete com ID ${reminderId} excluído com sucesso.`);
        } else {
            console.error(`Erro: Status code ${response.status}`);
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          
            if (error.response) {
                console.error('Status code:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        } else if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
        } else {
            console.error('Unexpected error type:', error);
        }
        throw error;
    }
};
