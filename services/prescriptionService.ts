import { Doctor } from '@/types/Doctor';
import { Prescription } from '@/types/Prescription';
import axios from 'axios';

const API_BASE_URL = "http://10.0.2.2:8003/api";
const DOCTOR_SERVICE_URL = "http://10.0.2.2:8001/api";


export const fetchPrescriptions = async (patientId: number): Promise<Prescription[]> => {
    const response = await axios.get<Prescription[]>(`${API_BASE_URL}/prescriptions/patient/${patientId}/`);
    return response.data;
};

export const fetchDoctorDetails = async (doctorId: number): Promise<{ name: string, specialty: string }> => {
    const response = await axios.get<Doctor>(`${DOCTOR_SERVICE_URL}/doctors/${doctorId}/`);
    const doctor = response.data;
    return {
        name: doctor.user.name,
        specialty: doctor.specialty,
    };
};
