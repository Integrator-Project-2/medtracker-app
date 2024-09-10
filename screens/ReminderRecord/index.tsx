import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";

import CardComponent from "@/components/Card";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useLocalSearchParams } from "expo-router";
import { getIconName } from "@/global/utils/iconUtils";
import { isMedication } from "@/global/utils/medicationUtils";
import { ReminderRecord } from "@/types/ReminderRecord";
import { fetchReminderRecords, fetchReminderRecordsByReminder } from "@/services/Reminders/reminderRecordListService";
import { formatDate, formatTime } from "@/global/utils/dateTimeUtils";
import { markMedicationAsTaken } from "@/services/Reminders/markMedicationAsTakenService";
import { usePatient } from "@/contexts/PatientContext";

export default function ReminderRecordsScreen() {
    const [reminderRecords, setReminderRecords] = useState<ReminderRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const { reminderId } = useLocalSearchParams<{ reminderId: string }>();
    const { patient } = usePatient();
    const patientId = patient?.id;

    useEffect(() => {
        const getReminders = async () => {
            try {
                if (!patientId) {
                    Alert.alert("Error", "Patient ID is not available.");
                    return;
                }

                let data: ReminderRecord[] = [];

                if (reminderId) {
                    data = await fetchReminderRecordsByReminder(parseInt(reminderId, 10));
                } else {
                    data = await fetchReminderRecords(patientId);
                }

                const filteredRecords = data.filter((record) => !record.taken);
                setReminderRecords(filteredRecords);

            } catch (error) {
                Alert.alert("Error", "Failed to fetch reminders.");
            } finally {
                setLoading(false);
            }
        };

        getReminders();
    }, [patientId, reminderId]);

    const handleMarkAsTaken = async (id: number) => {
        try {
            const response = await markMedicationAsTaken(id);
            const { warning } = response;

            if (warning) {
                Alert.alert('Warning', warning);
            } else {
                Alert.alert('Success', 'Medication marked as taken.');
                setReminderRecords(prevRecords => prevRecords.filter(record => record.id !== id));
            }

        } catch (error) {
            Alert.alert('Error', 'Failed to mark medication as taken.');
            console.error('Mark as taken error:', error);
        }
    };

    const renderReminderRecord = ({ item }: { item: ReminderRecord }) => {
        const medicationName = isMedication(item.reminder.medication) ? item.reminder.medication.name : 'Unknown Medication';
        const iconName = isMedication(item.reminder.medication) ? getIconName(item.reminder.medication.pharmaceutical_form) : 'tablet';

        return (
            <View>
                <CardComponent
                    title={medicationName}
                    subtitle={`${formatDate(item.reminder.day)}`}
                    additionalInfoPrimary={formatTime(item.remind_time)}
                    subTitlefontSize={14}
                    iconName={iconName}
                    width={312}
                    border
                    height={120}
                    onPress={() => handleMarkAsTaken(item.id!)}
                />
            </View>
        );
    };

    return (
        <Container>
            <Header>
                <Title text="Medications to Take" />
            </Header>

            <Subtitle text="All Reminders" size={16} marginBottom={10} />

            {loading ? (
                <Loader />
            ) : (
                <CardListContainer>
                    <FlatList
                        data={reminderRecords}
                        renderItem={renderReminderRecord}
                        keyExtractor={(item) => item.id!.toString()}
                        ListEmptyComponent={<Subtitle text="No reminders available today" size={16} />}
                    />
                </CardListContainer>
            )}
        </Container>
    );
}
