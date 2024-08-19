import Title from "@/components/Title";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { useState } from "react";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import { StyledScrollView } from "./styles";


export default function SelectMedicationScreen() {
    const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
    const router = useRouter();

    const handlePress = (value: string) => {
        setSelectedMedication(value);
    };

    return (
        <Container>
            <Header>
                <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
            </Header>

            <SubtitleContainer>
                <Subtitle text='Select a medication' size={16} />
            </SubtitleContainer>

            <Search />
            <StyledScrollView>
                <FormContainer marginTop={50}>
                    <CardComponent
                        title="Amoxicilina"
                        subtitle="1 capsule 50 mg"
                        iconName="pill"
                        border
                        select
                        value="Amoxicilina"
                        selected={selectedMedication === "Amoxicilina"}
                        onPress={() => handlePress("Amoxicilina")}
                        width={300}
                    />

                    <CardComponent
                        title="Ibuprofeno"
                        subtitle="1 capsule 50 mg"
                        iconName="tablet"
                        border
                        select
                        value="Ibuprofeno"
                        selected={selectedMedication === "Ibuprofeno"}
                        onPress={() => handlePress("Ibuprofeno")}
                        width={300}
                    />

                    <CardComponent
                        title="Dipirona"
                        subtitle="1 capsule 50 mg"
                        iconName="injection"
                        border
                        select
                        value="Dipirona"
                        selected={selectedMedication === "Dipirona"}
                        onPress={() => handlePress("Dipirona")}
                        width={300}
                    />
                </FormContainer>
                </StyledScrollView>

                <FormButtonContainer row >
                    <PrimaryButton
                        text='Cancel'
                        bgColor={theme.colors.lightNavy}
                        textColor={theme.colors.navy}
                        onPress={() => router.back()}
                        width={148}
                    />

                    <PrimaryButton
                        text='Next'
                        bgColor={theme.colors.navy}
                        onPress={() => {
                            if (selectedMedication) {
                                router.push(`/createReminder?medication=${encodeURIComponent(selectedMedication)}`);
                            }
                        }}
                        width={148}
                    />
                </FormButtonContainer>
        </Container>
    )
}
