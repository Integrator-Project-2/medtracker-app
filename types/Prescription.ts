export interface Prescription {
    id: number;
    doctor_id: number;
    patient_id: number;
    medication_ids: number[];
    description: string;
    dose: string;
    prescription_file: string;
    date: string;
}
