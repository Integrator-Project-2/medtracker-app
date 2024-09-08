import { Medication } from '@/types/Medication';
import axios from 'axios';

export async function fetchMedications(query: string = '', patientId: number): Promise<Medication[]> {
    try {
        const url = `http://10.0.2.2:8003/api/medications/patient/${patientId}`

        const params = query? { name: query } : query

        const response = await axios.get<{ medications: Medication[] }>(url, { params })

        return response.data.medications;

    } catch (error) {
        console.error("Erro ao buscar as medicações:", error);
        return [];
    }
}


export async function fetchMedicationsById(query: string = '', medicationId: number): Promise<Medication | null> {
    try {
        const url = `http://10.0.2.2:8000/api/medications/${medicationId}`;

     
        const response = await axios.get<Medication>(url);

    
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar medicamento por Id:", error);
        return null; 
    }
}
