import { Medication } from '@/types/Medication';
import { api } from '../api';

export async function fetchMedications(query: string = '', patientId: number): Promise<Medication[]> {
    try {
        const url = `medications-patient/${patientId}/`;
        
        const params = query ? { name: query } : {};

        const response = await api.get<{ medications: Medication[] }>(url, { params });
      
        return response.data.medications || [];
    } catch (error) {
        console.error("Erro ao buscar as medicações:", error);
       
        return [];
    }
}


export async function fetchMedicationsById(medicationId: number): Promise<Medication | null> {
    try {
        const url = `medications/${medicationId}`;
        
        const response = await api.get<Medication>(url);

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar medicamento por Id:", error);
        return null; 
    }
}