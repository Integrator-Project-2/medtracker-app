import { Medication } from '@/types/Medication';
import axios from 'axios';

export async function fetchMedications(): Promise<Medication[]> {
    try {
        const response = await axios.get<{ medications: Medication[] }>("http://10.0.2.2:8003/api/medications/patient/1/");
        return response.data.medications; 
        
    } catch (error) {
        console.error("Erro ao buscar as medicações:", error);
        return []; 
    }
}
