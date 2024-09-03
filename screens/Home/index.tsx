import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import AvatarComponent from "@/components/Avatar";
import CardComponent from "@/components/Card";
import { CardButton } from "@/components/CardButton";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { CardContainer, CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useRouter } from "expo-router";
import { requestNotificationPermissions } from "@/services/notificationPermissionsService";

export default function HomeScreen() {
    const router = useRouter();

    function handlePress() {
        router.push('/profile'); 
    }


    useEffect(() => {
        requestNotificationPermissions();
    }, []);

    return (
        <Container>
            <Header>
                <Title text="Hello, Michael Scott" />

                <TouchableOpacity onPress={handlePress}>
                    <AvatarComponent name="Michael Scott" />
                </TouchableOpacity>

            </Header>

            <Subtitle text="Upcoming Reminder" size={16} marginBottom={10} />
            <CardContainer>
                <CardComponent
                    title="Aspirine"
                    subtitle="1 capsule 50 mg"
                    additionalInfoPrimary="12:30"
                    iconName="pill"
                    bgColor={theme.colors.navy}
                    titleColor={theme.colors.white}
                    subtitleColor={theme.colors.white}
                    additionalInfoPrimaryColor={theme.colors.white}
                    width={316}
                />
            </CardContainer>

            <Subtitle text="More" size={16} marginBottom={10} />
            <CardListContainer>
                <CardButton
                    title="My prescriptions"
                    description="Check your medical prescriptions"
                    iconName="notes-medical"
                    iconLib="font-awesome"
                />
                <CardButton
                    title="My medications"
                    description="Check all your medications"
                    iconName="pills"
                    iconLib="fontisto"
                />
            </CardListContainer>
        </Container>
    );
}
