import axios from "axios";

const API_URL = 'http://10.0.2.2:8001/api/pacients';

export const getPatientData = async (patientId: number):Promise<Patient> => {
    try {
        const response = await axios.get<Patient>(`${API_URL}/${patientId}/`);
        return response.data;
    } catch (error) {
        throw new Error("Não foi possível carregar os dados do paciente.");
    }
};

export const updatePatientData = async (patientId: number, updatedData: Partial<Patient>): Promise<void> => {
    try {
        console.log("Atualizando dados:", updatedData); // Adicione este log
        await axios.put(`${API_URL}/${patientId}/`, updatedData);
    } catch (error) {
        console.error("Erro ao atualizar os dados:", error);
        throw new Error("Não foi possível atualizar os dados.");
    }
};