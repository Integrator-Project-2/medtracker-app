import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import ReminderTypeForm from "./reminderTypeForm";
import UniqueReminderForm from "./uniqueReminderForm";
import DailyReminderForm from "./dailyReminderForm";


export default function TakeMedicationReminderScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ medication: string }>();
    const medication = params.medication;
    
    const [checkedValue, setCheckedValue] = useState('uniqueReminder');
    const [step, setStep] = useState(1);

    function handlePress(value: string) {
        setCheckedValue(value);
    }

    function handleNext() {
        if (step === 1) {
            if (checkedValue === 'uniqueReminder') {
                setStep(3);
            } else if (checkedValue === 'dailyReminder') {
                setStep(2);
            }
        } else if (step === 2) {
            setStep(3);
        } else if (step === 3) {
            router.push(`/reminderConfirmation?reminderType=${encodeURIComponent(checkedValue)}`);
        }
    }

    function handleBack() {
        if (step === 3) {
            if (checkedValue === 'uniqueReminder') {
                setStep(1); // volta para 1 se for uniqueReminder
            } else {
                setStep(2); // volta para 2 se for dailyReminder 
            }
        } else if (step === 2) {
            setStep(1);
        } else {
            router.back();
        }
    }

    function renderForm() {
        if (step === 1) {
            return <ReminderTypeForm checkedValue={checkedValue} handlePress={handlePress} />;
        } else if (step === 2) {
            return <DailyReminderForm checkedValue={checkedValue} handlePress={handlePress} />;
        } else if (step === 3) {
            return <UniqueReminderForm />;
        }
        return null;
    }

    return (
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
                {renderForm()}
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
    );
}
