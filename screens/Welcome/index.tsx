import { DoctorWithMedicalPrescription } from "@/assets/images/svg/DoctorWithMedicalPrescription";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { AppDescription, ButtonContainer, ContentContainer, StyledDetail } from "./styles";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { ImageContainer } from "@/global/styles/globalStyles";

export function WelcomeScreen() {
    const router = useRouter();


    function handleGetStartedPress() {
        router.push('/authentication'); 
    }

    function handleAlreadyHaveAccountPress() {
        router.push('/authentication?step=3');
    }
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                backgroundColor:theme.colors.white
            }}
        >
            <ImageContainer>
                <DoctorWithMedicalPrescription />
            </ImageContainer>

            <ContentContainer>
                <StyledDetail />

                <Title 
                    text="Hey! Welcome"
                    color={theme.colors.navy}
                    size={24}
                />

                <AppDescription>
                    keep track of your medications and get your prescriptions  with medtracker
                </AppDescription>

                <ButtonContainer>
                    <PrimaryButton
                        text="Get started"
                        bgColor="#354DB0"
                        width={316} 
                        height={52}
                        onPress={handleGetStartedPress}
                    />

                    <PrimaryButton
                        text="I already have an account"
                        bgColor="transparent"
                        width={316} 
                        height={52}
                        textColor="#4D80F9"
                        border="1px solid #4D80F9"
                        onPress={handleAlreadyHaveAccountPress}
                    />
                </ButtonContainer>
            </ContentContainer>
        </View>
    )
}