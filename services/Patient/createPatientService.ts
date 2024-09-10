import axios from "axios";
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'default_url';

export async function registerPatient(data: Patient) {
    console.log("Iniciando o registro do paciente com os seguintes dados:", data);

    try {
        const response = await axios.post(`${apiUrl}register-patient/`, {
            user: {
                name: data.user.name,
                email: data.user.email,
                phone: data.user.phone,
                address: data.user.address,
                birth_date: data.user.birth_date,
                password: data.user.password,
            },
            cpf: data.cpf,
            gender: data.gender,
        });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            let errorMessage = 'An error occurred during registration. Please try again.';
            
            if (error.response?.status === 400) {
                // Error details can be extracted from error.response.data
                errorMessage = error.response?.data?.user?.email?.[0] || errorMessage;
            } else if (error.response?.status === 409) {
                errorMessage = 'Email already in use';
            }
            
            throw new Error(errorMessage);
        } else {
            console.error("Erro desconhecido:", error);
            throw new Error('An unexpected error occurred.');
        }
    }
}
