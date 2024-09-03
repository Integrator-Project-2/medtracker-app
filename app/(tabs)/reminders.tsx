import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import AvatarComponent from "@/components/Avatar";
import CardComponent from "@/components/Card";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { CardContainer, CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useRouter } from "expo-router";
import { requestNotificationPermissions } from "@/services/notificationPermissionsService";


export default function Reminders() {
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
                <Title text="Your Reminders" />

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
                    width={312}
                    menuOptions={
                      [
                          { label: 'Option 1', onPress: () => console.log('Option 1 pressed') }
                      ]
                    }
                  
                />
            </CardContainer>

            <Subtitle text="All Reminders" size={16} marginBottom={10} />
            <CardListContainer>
            <CardComponent
                    title="Aspirine"
                    subtitle="1 capsule 50 mg"
                    additionalInfoPrimary="12:30"
                    iconName="pill"
                    width={316}
                    border
                    menuOptions={
                      [
                          { label: 'Option 1', onPress: () => console.log('Option 1 pressed') }
                      ]
                  }
                />
                
            </CardListContainer>
        </Container>
    );
}
