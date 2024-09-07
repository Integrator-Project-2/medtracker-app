import { Medication } from "./Medication";

export interface Reminder {
    id?: number;
    medication: Medication;
    patient: number;
    reminder_type: string;
    frequency_per_day: number | null;
    frequency_hours: number | null;
    remind_time: string;
    day: string;
}