import React, { useEffect, useState } from "react";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import AvatarComponent from "@/components/Avatar";
import CardComponent from "@/components/Card";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { CardListContainer, Container, Header } from "@/global/styles/globalStyles";
import { useRouter } from "expo-router";
import { requestNotificationPermissions } from "@/services/notificationPermissionsService";
import { Reminder } from "@/types/Reminder";
import { fetchReminders } from "@/services/remindersListService";
import { getIconName } from "@/global/utils/iconUtils";
import { getPatientData } from "@/services/patientService";



export default function RemindersScreen() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [patientData, setPatientData] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const patientId = 1
 
    useEffect(() => {
        requestNotificationPermissions();
        loadPatientInfo()
        loadReminders();
    }, []);

    const loadPatientInfo = async () => {
        try {
            const patientData = await getPatientData(patientId);
            setPatientData(patientData || "Unknown");
        } catch (error) {
            
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

    function handlePress() {
        router.push('/profile');
    }

    const formatTime = (timeString: string) => {
        try {
            const [hours, minutes] = timeString.split(':').map(Number);
            if (isNaN(hours) || isNaN(minutes)) {
                throw new Error("Invalid time format");
            }
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        } catch (error) {
            console.error("Error formatting time:", error);
            return "00:00";
        }
    };

    const renderReminder = ({ item }: { item: Reminder }) => {
        return (
            <View>
                <CardComponent
                    title={item.medication.name}
                    subtitle={item.reminder_type}
                    additionalInfoPrimary={formatTime(item.remind_time)}
                    subTitlefontSize={14}
                    iconName={getIconName(item.medication.pharmaceutical_form)}
                    width={312}
                    height={100}
                    border
                    menuOptions={[
                        { label: 'Option 1', onPress: () => console.log('Option 1 pressed') }
                    ]}
                />
            </View>
        );
    };

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
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={<Subtitle text="No reminders available" size={16} />}
                    />
                </CardListContainer>
            )}
        </Container>
    );
}
