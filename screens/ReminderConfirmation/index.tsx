import { ReminderClock } from "@/assets/images/svg/ReminderClock";
import { InfoComponent } from "@/components/InfoComponent";
import { PrimaryButton } from "@/components/PrimaryButton";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Container, FormButtonContainer, Header, ImageContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { router, useLocalSearchParams } from "expo-router";
import { Column, ContentContainer } from "./styles";
import NotificationService, { Reminder } from "@/services/notificationService";

export default function ReminderConfirmationScreen() {
    const { reminderType } = useLocalSearchParams<{ reminderType: string }>();
    const isMoreThanOnePerDay = reminderType === 'moreThanOnePerDay';

    const mockReminders: Reminder[] = [
        {
            medication: "Paracetamol",
            remindTime: new Date("2024-08-24T04:54:00"),
            frequencyPerDay: 3,
            frequencyHours: 8,
            reminderType: "daily reminder",
            day: new Date("2024-08-24"),
        },
        {
            medication: "Ibuprofen",
            remindTime: new Date("2024-08-25T11:43:00"),
            frequencyPerDay: 1,
            frequencyHours: 24,
            reminderType: "daily reminder",
            day: new Date("2024-08-24"),
        },
    ];
    
    async function testMockedReminders() {
        try {
            for (const reminder of mockReminders) {
                await NotificationService.scheduleReminder(reminder);
            }
            alert("Lembrete agendado com sucesso!");
        } catch (error) {
            alert("Erro ao agendar o lembrete");
        }
    }

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
                    <InfoComponent label="Medication" data="Aspirine" />
                    <InfoComponent label="Initial Date" data="09-10-2024" />
                    {isMoreThanOnePerDay &&
                        (
                            <InfoComponent label="Times a day" data="2" />
                        )
                    }
                </Column>

                <Column>
                    <InfoComponent label="Reminder Type" data="Unique Reminder" />
                    <InfoComponent label="Initial Time" data="23:59" />
                    {isMoreThanOnePerDay &&
                        (
                            <InfoComponent label="Hours Interval" data="8" />
                        )
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
                    onPress={ async () => {
                        await testMockedReminders()
                        router.push('/medications')
                    }
                    }
                    width={148}
                    height={52}
                />
            </FormButtonContainer>
        </Container>
    );
}
