import { Reminder } from "@/types/Reminder";
import axios from "axios";

export const fetchReminders = async (patientId: number): Promise<Reminder[]> => {
    try {
        const url = `http://10.0.2.2:8000/api/medication-reminder/?patient_id=${patientId}`;

        const response = await axios.get<Reminder[]>(url);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os lembretes:", error);
        throw error;
    }
};
