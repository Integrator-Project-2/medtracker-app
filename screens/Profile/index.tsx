import MenuButton from "@/components/MenuButton";
import { Appbar } from "react-native-paper";
import { Alert, ScrollView } from "react-native";
import { ProfileContainer } from "@/components/ProfileInfoForm/styles";
import { ProfileInfoContainer } from "./styles";
import AvatarComponent from "@/components/Avatar";
import { ProfileInfoForm } from "@/components/ProfileInfoForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { theme } from "@/global/styles/theme";
import { getPatientData } from "@/services/Patient/patientService";
import Loader from "@/components/Loader";
import { ProfileInfoText } from "@/components/ProfileInfoText";
import { usePatient } from "@/contexts/PatientContext";
import { logOut } from "@/services/Authentication/logoutService";


export function ProfileScreen() {
    const router = useRouter();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [patientData, setPatientData] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);

    const { patient } = usePatient();
    const patientId = patient?.id;

    useEffect(() => {
        async function fetchData() {
            if (patientId !== undefined) {
                try {
                    const data = await getPatientData(patientId);
                    setPatientData(data);
                } catch (error) {
                    Alert.alert("Erro", "Não foi possível carregar os dados do paciente.");
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }
    
        fetchData();
    }, [patientId]);

    function handlePress() {
        router.back();
    }

    function handleCancel() {
        setIsFormVisible(false);
    }

    const handleLogout = async () => {
        try {
            await logOut(() => router.push('/signIn'));
        } catch (error) {
            Alert.alert("Erro", "Não foi possível realizar o logout.");
        }
    };

    const menuOptions = [
        {
            label: 'Edit',
            onPress: () => {
                setIsFormVisible(true);
            }
        },
        {
            label: 'Logout',
            onPress: handleLogout  
        }
    ];

    return (
        <ProfileContainer>
            <Appbar.Header mode="center-aligned" theme={theme}>
                <Appbar.BackAction onPress={handlePress} />
                <Appbar.Content title="Profile" />
                <MenuButton
                    options={menuOptions}
                    iconColor="black"
                />
            </Appbar.Header>

            {loading ? (
                <Loader />
            ) : (
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    <ProfileInfoContainer>
                        <AvatarComponent
                            name={patientData?.user.name || "Unknown"}
                            size={70}
                        />

                        {isFormVisible ? (
                            <ProfileInfoForm
                                initialData={patientData}
                                patientId={patientId as number}
                                onCancel={handleCancel}
                            />
                        ) : (
                            <ProfileInfoText data={patientData} />
                        )}
                    </ProfileInfoContainer>
                </ScrollView>
            )}
        </ProfileContainer>
    );
}