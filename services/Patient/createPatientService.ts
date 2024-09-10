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

        // console.log("Resposta do servidor:", response);

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Erro no cadastro - mensagem:", error.message);
            console.error("Erro no cadastro - resposta:", error.response?.data);
            console.error("Erro no cadastro - status:", error.response?.status);
        } else {
            console.error("Erro desconhecido:", error);
        }
        throw error;
    }
}