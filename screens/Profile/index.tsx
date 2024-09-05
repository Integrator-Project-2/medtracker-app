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
import { getPatientData } from "@/services/patientService";
import Loader from "@/components/Loader";
import { ProfileInfoText } from "@/components/ProfileInfoText";

export function ProfileScreen() {
    const router = useRouter();
    const [isFormVisible, setIsFormVisible] = useState(false); 
    const [patientData, setPatientData] = useState<Patient | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPatientData(1);
                setPatientData(data);
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar os dados do paciente.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    function handlePress() {
        router.back(); 
    }

    const menuOptions = [
        {
            label: 'Logout',
            onPress: () => { }
        },
        {
            label: 'Edit',
            onPress: () => {
                setIsFormVisible(true);
            }
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
                            <ProfileInfoForm initialData={patientData} patientId={1} /> 
                        ) : (
                            <ProfileInfoText data={patientData}/>
                        )}

                    </ProfileInfoContainer>
                </ScrollView>
            )}
        </ProfileContainer>
    )
}
