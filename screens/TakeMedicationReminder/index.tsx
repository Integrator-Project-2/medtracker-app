import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import ReminderTypeForm from "./reminderTypeForm";
import DailyReminderForm from "./dailyReminderForm";
import SelectDayAndTimeForm from "./selectDayAndTimeForm";
import { createMedicationReminder } from "@/services/createReminderService";


export default function TakeMedicationReminderScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ medication: string }>();
    const medication = params.medication;

    const [step, setStep] = useState(1);
    const methods = useForm({
        defaultValues: {
            patient: 1,
            medication: 2,
            reminder_type: 'unique reminder',
            frequency_per_day: 1,
            frequency_hours: 0,
            remind_time: '',
            day: '',
        },
    });

    const handleNext = methods.handleSubmit(async (data) => {
        
        if (step === 1) {
            console.log("Tipo de lembrete:", data.reminder_type);
            if (data.reminder_type === 'daily reminder') {
                setStep(2);
            } else if (data.reminder_type === 'unique reminder') {
                setStep(3);
            }
        } else if (step === 2) {
            setStep(3);
        } else if (step === 3) {
            console.log("Dados no passo 3:", data);
            const dayDate = new Date(data.day);
            const remindTimeDate = new Date(data.remind_time);
    
            const formattedData = {
                ...data,
                day: !isNaN(dayDate.getTime()) 
                    ? dayDate.toISOString().split("T")[0]
                    : data.day,
                remind_time: !isNaN(remindTimeDate.getTime())
                    ? remindTimeDate.toLocaleTimeString([], { hour12: false })
                    : data.remind_time,
            };
    
            console.log("Dados formatados para envio:", formattedData);
    
            // try {
            //     console.log('Chamando createMedicationReminder...');
            //     await createMedicationReminder(formattedData);
            //     console.log('Lembrete de medicação criado com sucesso.');
            //     router.push(`/reminderConfirmation?reminderType=${encodeURIComponent(formattedData.reminder_type)}`);
            // } catch (error) {
            //     console.error('Erro ao criar lembrete de medicação:', error);
            // }
               // Codifica os dados como uma string JSON
        const queryString = encodeURIComponent(JSON.stringify(formattedData));

        router.push(`/reminderConfirmation?data=${queryString}`);

        }
    });
    

    const handleBack = () => {
        if (step === 1) {
            router.back();
        } else {
            setStep(step - 1);
        }
    };

    return (
        <FormProvider {...methods}>
            <Container>
                <Header column>
                    <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
                    <Subtitle text="Take My Medications" size={16} color={theme.colors.lightPurple} />
                    <Subtitle text={`${medication}`} size={16} color={theme.colors.lightBlue} />
                </Header>

                <SubtitleContainer>
                    <Subtitle
                        text={
                            step === 1
                                ? 'What kind of reminder do you want to set?'
                                : step === 2
                                ? 'How many times a day do you need to take this medication?'
                                : 'When do you want to be reminded?'
                        }
                        size={16}
                    />
                </SubtitleContainer>

                <FormContainer marginTop={50}>
                    {step === 1 && <ReminderTypeForm />}
                    {step === 2 && <DailyReminderForm />}
                    {step === 3 && <SelectDayAndTimeForm />}
                </FormContainer>

                <FormButtonContainer row marginTop={100}>
                    <PrimaryButton
                        text='Back'
                        bgColor={theme.colors.lightNavy}
                        textColor={theme.colors.navy}
                        onPress={handleBack}
                        width={148}
                        height={52}
                    />

                    <PrimaryButton
                        text='Next'
                        bgColor={theme.colors.navy}
                        onPress={handleNext}
                        width={148}
                        height={52}
                    />
                </FormButtonContainer>
            </Container>
        </FormProvider>
    );
}
