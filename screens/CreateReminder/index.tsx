import { InputRadio } from "@/components/InputRadio";
import Title from "@/components/Title";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { useState } from "react";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function CreateReminderScreen() {
    const [checkedValue, setCheckedValue] = useState('takeMyMedications');
    const router = useRouter();
    const params = useLocalSearchParams<{ medication: string }>();
    const medication = params.medication;

    function handlePress(value: string){
        setCheckedValue(value);
    };

    function handleNext(){
        if (checkedValue === 'takeMyMedications'){
            router.push(`/takeMedicationReminder?medication=${encodeURIComponent(medication)}`)
        } else if (checkedValue === 'manageMedicationStock'){
            router.push(`/medicationStockReminder?medication=${encodeURIComponent(medication)}`)
        }
    }

    return (
        <Container>
            <Header column >
                <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
                <Subtitle text={`${medication}`} size={16} color={theme.colors.lightBlue}/>
            </Header>

            <SubtitleContainer>
                <Subtitle text='Whats the reminder for?' size={16} />
            </SubtitleContainer>

            <FormContainer marginTop={50}>
                <InputRadio
                    text="Take my medications"
                    selected={checkedValue === 'takeMyMedications'}
                    value="takeMyMedications"
                    onPress={handlePress}
                />

                <InputRadio
                    text="Manage medication stock"
                    selected={checkedValue === 'manageMedicationStock'}
                    value="manageMedicationStock"
                    onPress={handlePress}
                />
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
