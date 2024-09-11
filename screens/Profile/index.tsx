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
    const { patient, setPatient } = usePatient();
    const patientId = patient?.id;

    const updatePatientDataInState = async () => {
        if (patientId !== undefined) {
            try {
                const data = await getPatientData(patientId);
                setPatientData(data);
                setPatient(data); 
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar os dados do paciente.");
            }
        }
    };

    useEffect(() => {
        setLoading(true);
        updatePatientDataInState().finally(() => setLoading(false));
    }, [patientId]);

    function handleCancel() {
        setIsFormVisible(false);
        updatePatientDataInState(); 
    }


    function handlePress() {
        router.back();
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
            label: 'Logout',
            onPress: handleLogout  
        },
        {
            label: 'Edit',
            onPress: () => {
                setIsFormVisible(true);
            }
        },
    ];

    return (
        <ProfileContainer>
            <Appbar.Header mode="center-aligned" theme={theme}>
                <Appbar.BackAction onPress={handlePress} />
                <Appbar.Content title="Profile" />
                <MenuButton
                    options={menuOptions}
                    iconColor="black"
                    style={{ marginTop: 20 }}
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
                                onSuccess={updatePatientDataInState}
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