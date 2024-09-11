import React, { useState } from 'react';
import { Alert } from 'react-native';
import Title from "@/components/Title";
import { Container, FormButtonContainer, FormContainer, Header } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { Medication } from '@/types/Medication';
import { AmountReminder } from '@/types/AmountReminder';
import { createMedicationAmountReminder } from '@/services/Reminders/createAmountReminderService';
import { updateMedicationAmountReminder } from '@/services/Reminders/updateAmountReminderService';
import Subtitle from '@/components/Subtitle';
import IntegerInput from "@/components/IntegerInput";

export default function MedicationStockReminderScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ medication: string, amountReminder?: string }>();
    
    const medication: Medication = JSON.parse(decodeURIComponent(params.medication || '{}'));

    const amountReminder: AmountReminder | undefined = params.amountReminder 
        ? JSON.parse(decodeURIComponent(params.amountReminder))
        : undefined;

    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button disable status

    const methods = useForm<AmountReminder>({
        defaultValues: {
            medication: medication.id,
            amount: amountReminder?.amount || 30, 
            reminder_quantity: amountReminder?.reminder_quantity || 5, 
            quantity_taken: amountReminder?.quantity_taken || 1,
        }
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: AmountReminder) => {
        setIsSubmitting(true); // Disable the button when submitting
        try {
            if (amountReminder && amountReminder.id !== undefined) {
                const amountReminderId = amountReminder.id.toString();
                await updateMedicationAmountReminder(amountReminderId, data);
            } else {
                await createMedicationAmountReminder(data);
            }
            router.push('/medications');
        } catch (error) {
            if (error instanceof Error && error.message === 'ExistingReminder') {
                Alert.alert(
                    'Amount Reminder',
                    'You already have a reminder for this medication.',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                setTimeout(() => {
                                    router.push('/medications');
                                }, 100);
                            }
                        }
                    ],
                );
            } else {
                console.error('Failed to save medication reminder', error);
            }
        } finally {
            setIsSubmitting(false); // Re-enable the button when done
        }
    };

    return (
        <FormProvider {...methods}>
            <Container>
                <Header column>
                    <Title text={amountReminder ? "Update Reminder" : "Create Reminder"} color={theme.colors.darkBlue} size={24} />
                    <Subtitle text="Manage Medication Stock" size={16} color={theme.colors.lightPurple} />
                    <Subtitle text={medication.name} size={16} color={theme.colors.lightBlue} />
                </Header>

                <FormContainer marginTop={50}>
                    <Controller
                        name="amount"
                        control={methods.control}
                        render={({ field: { onChange, value } }) => (
                            <IntegerInput
                                label="Current Stock"
                                value={value}
                                onChange={(val) => onChange(val)}
                            />
                        )}
                    />
                    <Controller
                        name="quantity_taken"
                        control={methods.control}
                        render={({ field: { onChange, value } }) => (
                            <IntegerInput
                                label="Dose"
                                value={value}
                                onChange={(val) => onChange(val)}
                            />
                        )}
                    />
                    <Controller
                        name="reminder_quantity"
                        control={methods.control}
                        render={({ field: { onChange, value } }) => (
                            <IntegerInput
                                label="Remind Me When I Have"
                                value={value}
                                onChange={(val) => onChange(val)}
                            />
                        )}
                    />
                </FormContainer>

                <FormButtonContainer row marginTop={100}>
                    <PrimaryButton
                        text="Back"
                        bgColor={theme.colors.lightNavy}
                        textColor={theme.colors.navy}
                        onPress={() => router.back()}
                        width={148}
                        height={52}
                    />
                    <PrimaryButton
                        text="Confirm"
                        bgColor={theme.colors.navy}
                        onPress={handleSubmit(onSubmit)}
                        width={148}
                        height={52}
                        disabled={isSubmitting}
                    />
                </FormButtonContainer>
            </Container>
        </FormProvider>
    );
}
