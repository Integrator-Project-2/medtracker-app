import React, { useState } from 'react';
import Title from "@/components/Title";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import IntegerInput from "@/components/IntegerInput";


export default function MedicationStockReminderScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ medication: string }>();

    function handleNext() {

        router.push(`/medications`);

    }

    return (
        <Container>
            <Header column>
                <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
                <Subtitle text="Manage Medication Stock" size={16} color={theme.colors.lightPurple} />
                <Subtitle text={`${params.medication}`} size={16} color={theme.colors.lightBlue} />
            </Header>


            <FormContainer marginTop={50}>
                <IntegerInput label='Current Stock' />
                <IntegerInput label='Remind Me When I Have' />
            </FormContainer>

            <FormButtonContainer row marginTop={100}>
                <PrimaryButton
                    text='Back'
                    bgColor={theme.colors.lightNavy}
                    textColor={theme.colors.navy}
                    onPress={() => router.back()}
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
    )
}
