import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import AvatarComponent from "@/components/Avatar";
import CardComponent from "@/components/Card";
import { CardButton } from "@/components/CardButton";
import Subtitle from "@/components/Subtitle";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { CardContainer, CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useRouter } from "expo-router";
import { requestNotificationPermissions } from "@/services/Notifications/notificationPermissionsService";
import { fetchUpcomingReminderRecord } from "@/services/Reminders/reminderRecordListService";
import { ReminderRecord } from "@/types/ReminderRecord";
import { isMedication } from "@/global/utils/medicationUtils";
import { getIconName } from "@/global/utils/iconUtils";
import { formatDate, formatTime } from "@/global/utils/dateTimeUtils";
import { markMedicationAsTaken } from "@/services/Reminders/markMedicationAsTakenService";
import { usePatient } from "@/contexts/PatientContext";

export default function HomeScreen() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [reminderRecordData, setReminderRecordData] = useState<ReminderRecord | null>(null);
    const { patient } = usePatient(); 
    const patientId = patient?.id;

    function handlePress() {
        router.push('/profile');
    }

    useEffect(() => {
        if (patientId) {
            requestNotificationPermissions();
            getUpcomingReminder();
        }
    }, [patientId]);

    const getUpcomingReminder = async () => {
        if (!patientId) return; // Ensure patientId is available

        try {
            setLoading(true);
            const upcomingReminderData = await fetchUpcomingReminderRecord(patientId);
            setReminderRecordData(upcomingReminderData || null);
        } catch (error) {
            console.error("Error loading upcoming reminder:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsTaken = async (id: number) => {
        try {
            const response = await markMedicationAsTaken(id);

            const { warning } = response;
            if (warning) {
                Alert.alert('Warning', warning);
            } else {
                Alert.alert('Success', 'Medication marked as taken');
                getUpcomingReminder();
            }

        } catch (error) {
            Alert.alert('Error', 'Failed to mark medication as taken');
        }
    };

    return (
        <Container>
            <Header>
                <Title text={`Hello, ${patient?.user.name || " "}`}/>

                <TouchableOpacity onPress={handlePress}>
                    <AvatarComponent name={patient?.user.name || " "} />
                </TouchableOpacity>
            </Header>

            <Subtitle text="Upcoming Reminder" size={16} marginBottom={10} />
            <CardContainer>
                {loading ? (
                    <Loader />
                ) : reminderRecordData && reminderRecordData.reminder && isMedication(reminderRecordData.reminder.medication) ? (
                    <CardComponent
                        title={reminderRecordData.reminder.medication.name}
                        subtitle={`${formatDate(reminderRecordData.reminder.day)}`}
                        additionalInfoPrimary={formatTime(reminderRecordData.remind_time)}
                        iconName={getIconName(reminderRecordData.reminder.medication.pharmaceutical_form)}
                        bgColor={theme.colors.navy}
                        titleColor={theme.colors.white}
                        subtitleColor={theme.colors.white}
                        additionalInfoPrimaryColor={theme.colors.white}
                        width={316}
                        subTitlefontSize={14}
                        onPress={() => handleMarkAsTaken(reminderRecordData.id!)}
                    />
                ) : (
                    <Subtitle text="No reminders for today" size={16} marginBottom={10} />
                )}
            </CardContainer>

            <Subtitle text="More" size={16} marginBottom={10} />
            <CardListContainer>
                <CardButton
                    title="Reminders of the day"
                    description="Check your reminders of the day"
                    iconLib="material-icons"
                    onPress={() => router.push('/reminderRecords')}
                />
                <CardButton
                    title="My prescriptions"
                    description="Check your medical prescriptions"
                    iconName="notes-medical"
                    iconLib="font-awesome"
                    onPress={() => router.push('/prescriptions')}
                />
                <CardButton
                    title="My medications"
                    description="Check all your medications"
                    iconLib="fontisto"
                    onPress={() => router.push('/medications')}
                />
            </CardListContainer>
        </Container>
    );
}
