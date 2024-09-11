import React, { useEffect, useState } from "react";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import AvatarComponent from "@/components/Avatar";
import CardComponent from "@/components/Card";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useRouter } from "expo-router";
import { requestNotificationPermissions } from "@/services/Notifications/notificationPermissionsService";
import { Reminder } from "@/types/Reminder";
import { getIconName } from "@/global/utils/iconUtils";
import { isMedication } from "@/global/utils/medicationUtils";
import { fetchReminders } from "@/services/Reminders/remindersListService";
import { deleteReminder } from "@/services/Reminders/deleteReminderService";
import { formatTime } from "@/global/utils/dateTimeUtils";
import NotificationService from "@/services/Notifications/localNotificationService";
import { usePatient } from "@/contexts/PatientContext";

export default function RemindersScreen() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { patient } = usePatient();
    const patientId = patient?.id;

    useEffect(() => {
        const initialize = async () => {
            try {
                await requestNotificationPermissions(patientId as number);
                if (patientId) {
                    await loadReminders();
                } else {
                    console.warn("Patient ID is not available.");
                }
            } catch (error) {
                console.error("Initialization error:", error);
                Alert.alert("Error", "Failed to initialize the reminders screen.");
            }
        };

        initialize();
        console.log(patientId)
    }, [patientId]);

    const loadReminders = async () => {
        if (!patientId) {
            console.error("Patient ID is not available.");
            return;
        }

        try {
            setLoading(true);
            const data = await fetchReminders(patientId);
            if (Array.isArray(data)) {
                setReminders(data);
            } else {
                console.error("Invalid data format:", data);
                Alert.alert("Error", "Unexpected data format received.");
            }
        } catch (error) {
            Alert.alert("Error", "Failed to load reminders.");
            console.error("Fetch reminders error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteReminder = async (id: number) => {
        try {
            await NotificationService.cancelReminder(id);
            await deleteReminder(id);
            setReminders(prev => prev.filter(reminder => reminder.id !== id));
        } catch (error) {
            Alert.alert("Error", "Failed to delete reminder.");
            console.error("Delete reminder error:", error);
        }
    };

    const handleViewReminders = (reminderId: number) => {
        router.push(`/reminderRecords?reminderId=${reminderId}`);
    };

    const renderReminder = ({ item }: { item: Reminder }) => {
        const medicationName = isMedication(item.medication) ? item.medication.name : 'Unknown Medication';
        const iconName = isMedication(item.medication) ? getIconName(item.medication.pharmaceutical_form) : 'tablet';

        return (
            <View>
                <CardComponent
                    title={medicationName}
                    subtitle={item.reminder_type}
                    additionalInfoPrimary={formatTime(item.remind_time)}
                    subTitlefontSize={14}
                    iconName={iconName}
                    width={312}
                    height={100}
                    border
                    menuOptions={[
                        { label: 'Delete', onPress: () => handleDeleteReminder(item.id!) },
                        { label: 'View Reminders', onPress: () => handleViewReminders(item.id!) }
                    ]}
                />
            </View>
        );
    };

    const handlePress = () => {
        router.push('/profile');
    };

    return (
        <Container>
            <Header>
                <Title text="Your Reminders" />
                <TouchableOpacity onPress={handlePress}>
                    <AvatarComponent name={patient?.user.name || " "} />
                </TouchableOpacity>
            </Header>

            <Subtitle text="All Reminders" size={16} marginBottom={10} />
            {loading ? (
                <Loader />
            ) : (
                <CardListContainer>
                    <FlatList
                        data={reminders}
                        renderItem={renderReminder}
                        keyExtractor={(item) => item.id!.toString()}
                        ListEmptyComponent={<Subtitle text="No reminders available" size={16} />}
                    />
                </CardListContainer>
            )}
        </Container>
    );
}
