import axios from "axios";
import { AmountReminder } from "@/types/AmountReminder";

export const updateMedicationAmountReminder = async (
    reminderId: string,
    amountReminder: AmountReminder
): Promise<AmountReminder> => {
    try {
        const url = `http://10.0.2.2:8000/api/amount-reminder/${reminderId}/`;
        const response = await axios.put<AmountReminder>(url, amountReminder, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('API Response:', response.data);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updating amount reminder:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
