import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { Container, Header } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { fetchMedications } from "@/services/Medications/medicationService";
import { Medication } from "@/types/Medication";
import { getIconName } from "@/global/utils/iconUtils";
import { router } from "expo-router";
import { AmountReminder } from "@/types/AmountReminder";
import { deleteMedicationAmountReminder } from "@/services/Reminders/deleteAmountReminderService";

export function MedicationsScreen() {
    const [medications, setMedications] = useState<Medication[]>([]);
    const [loading, setLoading] = useState(true);
    const patientId = 1;

    const getMedications = async (query: string = '') => {
        try {
            setLoading(true);
            const data = await fetchMedications(query, patientId);
            setMedications(data);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar as medicações.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMedications();
    }, []);

    const handleSearch = (query: string) => {
        getMedications(query);
    };

    const handleManageStock = (amountReminder: AmountReminder | null | undefined, medication: Medication) => {
        const amountReminderParam = amountReminder
            ? `&amountReminder=${encodeURIComponent(JSON.stringify(amountReminder))}`
            : '';
        router.push(`/medicationStockReminder?medication=${encodeURIComponent(JSON.stringify(medication))}${amountReminderParam}`);
    };

    const handleDelete = (reminderId: string) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this reminder?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await deleteMedicationAmountReminder(reminderId);
                            Alert.alert("Success", "Reminder deleted successfully.");
                            getMedications();  // Refresh list after deletion
                        } catch (error) {
                            Alert.alert("Error", "Failed to delete the reminder.");
                        }
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }: { item: Medication }) => {
        const amountColor = item.low_stock ? theme.colors.red : theme.colors.lightBlue;
        const displayAmount = item.amount !== null && item.amount !== undefined ? `${item.amount}` : undefined;
        const deleteOption = item.amount_reminder && item.amount_reminder.id
            ? { label: 'Delete Amount', onPress: () => handleDelete(item.amount_reminder!.id!.toString()) }
            : undefined;


            const menuOptions = [
                { label: 'Manage Stock', onPress: () => handleManageStock(item.amount_reminder, item) },
                ...(deleteOption ? [deleteOption] : [])
            ];

        return (
            <View>
                <CardComponent
                    title={item.name}
                    subtitle={item.pharmaceutical_form}
                    additionalInfoPrimary={displayAmount ? "Amount" : undefined}
                    additionalInfoSecondary={displayAmount}
                    iconName={getIconName(item.pharmaceutical_form)}
                    border
                    additionalInfoSecondaryColor={amountColor}
                    additionalInfoPrimaryColor={theme.colors.lightPurple}
                    height={120}
                    width={312}
                    additionalInfoPrimaryfontSize={13}
                    menuOptions={menuOptions}
                />
            </View>
        );
    };


    return (
        <Container>
            <Header>
                <Title text="Medications" />
            </Header>

            <Search onSearch={handleSearch} />

            {loading ? (
                <Loader />
            ) : (
                <FlatList
                    data={medications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </Container>
    );
}
