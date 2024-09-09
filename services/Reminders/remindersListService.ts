import { Reminder } from "@/types/Reminder";
import api from '../api';  // Ajuste o caminho conforme necessário
import axios from "axios";

export const fetchReminders = async (patientId: number): Promise<Reminder[]> => {
    try {
        const url = `/medication-reminder/?patient_id=${patientId}`;  

        const response = await api.get<Reminder[]>(url);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Erro ao buscar os lembretes:", error.response?.data || error.message);
        } else {
            console.error("Erro inesperado:", error);
        }
        throw error;
    }
};
