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

    // Decodificar o JSON do medicamento e garantir que é um objeto válido
    const medicationJson = params.medication || '{}';
    let medication: any = {};
    try {
        medication = JSON.parse(decodeURIComponent(medicationJson));
        console.log('Medication received:', medication);  // Adicione isso para debug
    } catch (error) {
        console.error('Erro ao decodificar o medicamento:', error);
    }

    function handlePress(value: string){
        setCheckedValue(value);
    };

    function handleNext(){
        const medicationJson = JSON.stringify(medication);
        if (checkedValue === 'takeMyMedications'){
            router.push(`/takeMedicationReminder?medication=${encodeURIComponent(medicationJson)}`);
        } else if (checkedValue === 'manageMedicationStock'){
            router.push(`/medicationStockReminder?medication=${encodeURIComponent(medicationJson)}`);
        }
    }

    return (
        <Container>
            <Header column>
                <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
                <Subtitle text={ medication.name } size={16} color={theme.colors.lightBlue}/>
            </Header>

            <SubtitleContainer>
                <Subtitle text='What’s the reminder for?' size={16} />
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
    );
}
