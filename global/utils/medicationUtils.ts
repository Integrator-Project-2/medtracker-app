import { Medication } from "@/types/Medication";

export function isMedication(obj: Medication | number): obj is Medication {
    return typeof obj === 'object' && obj !== null && 'name' in obj;
}
