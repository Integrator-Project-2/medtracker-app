import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Container, FormButtonContainer, Header, ImageContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

import { PrimaryButton } from "@/components/PrimaryButton";
import { ReminderClock } from "@/assets/images/svg/ReminderClock";
import { createMedicationReminder } from "@/services/createReminderService";
import { Column, ContentContainer } from "./styles";
import { InfoComponent } from "@/components/InfoComponent";

export default function ReminderConfirmationScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ data: string }>();
    const data = JSON.parse(decodeURIComponent(params.data || '{}'));

    const handleConfirm = async () => {
        try {
            await createMedicationReminder(data);
            router.push('/reminders');
        } catch (error) {
            console.error('Erro ao criar lembrete de medicação:', error);
        }
    };

    return (
        <Container>
            <Header column>
                <Title text='Create Reminder' />
                <Subtitle text='Take my medications' color={theme.colors.lightPurple} />
            </Header>

            <ImageContainer rounded fixedHeight bgColor={theme.colors.lightBlueWithOpacity}>
                <ReminderClock />
            </ImageContainer>

            <ContentContainer>
                <Column>
                    <InfoComponent label="Medication" data={data.medication} />
                    <InfoComponent label="Initial Date" data={data.day} />
                    {data.reminder_type === 'daily reminder' &&
                        <InfoComponent label="Times a day" data={data.frequency_per_day.toString()} />
                    }
                </Column>

                <Column>
                    <InfoComponent label="Reminder Type" data={data.reminder_type} />
                    <InfoComponent label="Initial Time" data={data.remind_time} />
                    {data.reminder_type === 'daily reminder' &&
                        <InfoComponent label="Hours Interval" data={data.frequency_hours.toString()} />
                    }
                </Column>
            </ContentContainer>

            <FormButtonContainer row marginTop={50}>
                <PrimaryButton
                    text='Back'
                    bgColor={theme.colors.lightNavy}
                    textColor={theme.colors.navy}
                    onPress={() => router.back()}
                    width={148}
                    height={52}
                />

                <PrimaryButton
                    text='Confirm'
                    bgColor={theme.colors.navy}
                    onPress={handleConfirm}
                    width={148}
                    height={52}
                />
            </FormButtonContainer>
        </Container>
    );
}
