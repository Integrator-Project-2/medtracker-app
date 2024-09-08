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
import { getPatientData } from "@/services/Patient/patientService";
import { isMedication } from "@/global/utils/medicationUtils";
import { fetchReminders } from "@/services/Reminders/remindersListService";
import { deleteReminder } from "@/services/Reminders/deleteReminderService";
import { formatTime } from "@/global/utils/dateTimeUtils";
import NotificationService from "@/services/Notifications/localNotificationService";

export default function RemindersScreen() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [patientData, setPatientData] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const patientId = 1;

    useEffect(() => {
        requestNotificationPermissions();
        loadPatientInfo();
        loadReminders();
    }, []);

    const loadPatientInfo = async () => {
        try {
            const patientData = await getPatientData(patientId);
            setPatientData(patientData || "Unknown");
        } catch (error) {
            console.error("Error loading patient info:", error);
        }
    };

    const loadReminders = async () => {
        try {
            setLoading(true);
            const data = await fetchReminders(patientId);
            if (Array.isArray(data)) {
                setReminders(data);
            } else {
                console.error("Invalid data format:", data);
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar os lembretes.");
            console.error("Fetch reminders error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteReminder = async (id: number) => {
        try {

            await NotificationService.cancelReminder(id)
            await deleteReminder(id);

            setReminders(reminders.filter(reminder => reminder.id !== id));

        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o lembrete.");
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

    function handlePress() {
        router.push('/profile');
    }

    return (
        <Container>
            <Header>
                <Title text="Your Reminders" />
                <TouchableOpacity onPress={handlePress}>
                    <AvatarComponent
                        name={patientData?.user.name || "Unknown"}
                    />
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
