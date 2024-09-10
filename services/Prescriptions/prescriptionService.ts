import { Doctor } from '@/types/Doctor';
import { Prescription } from '@/types/Prescription';
import { api } from '../api';


export const fetchPrescriptions = async (patientId: number): Promise<Prescription[]> => {
    try {

        const url = `/prescriptions/patient/${patientId}/`

        const response = await api.get<Prescription[]>(url);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar prescrições:", error);
        throw new Error("Não foi possível buscar as prescrições.");
    }
};


export const fetchDoctorDetails = async (doctorId: number): Promise<{ name: string, specialty: string }> => {
    try {
        const url = `/doctors-service/${doctorId}/`
        const response = await api.get<Doctor>(url);
        const doctor = response.data;
        return {
            name: doctor.user.name,
            specialty: doctor.specialty,
        };
    } catch (error) {
        console.error("Erro ao buscar detalhes do médico:", error);
        throw new Error("Não foi possível buscar os detalhes do médico.");
    }
};
