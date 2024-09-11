import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { format } from 'date-fns';
import { FilterIcon } from "@/assets/images/svg/FilterIcon";
import CardComponent from "@/components/Card";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { theme } from "@/global/styles/theme";
import { FilterButton, FilterButtonText } from "./styles";
import { CardContainer, Container, Header } from "@/global/styles/globalStyles";
import { fetchPrescriptions, fetchDoctorDetails } from "@/services/Prescriptions/prescriptionService";
import { Prescription } from "@/types/Prescription";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Linking from 'expo-linking';
import { usePatient } from "@/contexts/PatientContext";
import Subtitle from "@/components/Subtitle";


export function Prescriptions() {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const [doctors, setDoctors] = useState<{ [key: number]: { name: string, specialty: string } }>({});
    const [loading, setLoading] = useState(true);
    const { patient } = usePatient();
    const patientId = patient?.id;


    const downloadPrescription = async (base64Pdf: string) => {
        try {
            console.log("Iniciando download do PDF...");
    
            const fileUri = `${FileSystem.documentDirectory}prescription.pdf`;
    
            await FileSystem.writeAsStringAsync(fileUri, base64Pdf, {
                encoding: FileSystem.EncodingType.Base64,
            });
           
            const isSharingAvailable = await Sharing.isAvailableAsync();
            if (isSharingAvailable) {
                console.log("Compartilhamento está disponível.");
    
                await Sharing.shareAsync(fileUri);
            } else {
                console.log("Compartilhamento não está disponível.");
    
                await Linking.openURL(fileUri);
            }
        } catch (error) {
            console.error("Erro ao baixar ou visualizar o PDF:", error);
            Alert.alert("Erro", "Não foi possível baixar a prescrição.");
        }
    };
    

    useEffect(() => {
        const loadPrescriptions = async () => {
            if (patientId === undefined) {
                Alert.alert("Erro", "Paciente não encontrado.");
                setLoading(false);
                return;
            }
            try {
                const prescriptionData = await fetchPrescriptions(patientId);
                setPrescriptions(prescriptionData);
    
                const doctorDetails = await Promise.all(
                    prescriptionData.map(prescription => fetchDoctorDetails(prescription.doctor_id))
                );
                const doctorMap = doctorDetails.reduce((map, doctor, index) => {
                    map[prescriptionData[index].doctor_id] = doctor;
                    return map;
                }, {} as { [key: number]: { name: string, specialty: string } });
    
                setDoctors(doctorMap);
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar as prescrições.");
            } finally {
                setLoading(false);
            }
        };
    
        loadPrescriptions();
    }, [patientId]);

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                console.error("Invalid date string:", dateString);
                return "Invalid Date";
            }
            return format(date, "EEE, MMM d");
        } catch (error) {
            console.error("Error formatting date:", error);
            return "Invalid Date";
        }
    };

    const renderItem = ({ item }: { item: Prescription }) => (
        <View>
            <CardComponent
                title={doctors[item.doctor_id]?.specialty || "Unknown Specialty"}
                subtitle={`Dr. ${doctors[item.doctor_id]?.name}` || "Unknown Doctor"}
                subTitlefontSize={11}
                titlefontSize={13}
                additionalInfoPrimary={`${formatDate(item.date)}`}
                additionalInfoPrimaryfontSize={11}
                iconName="prescription"
                bgColor={theme.colors.cardLightColor}
                downloadButton
                downloadPress={() => {
                    downloadPrescription(item.prescription_pdf);
                }}
                width={312}
            />
        </View>
    );

    return (
        <Container>
            <Header>
                <Title text="Prescriptions" />
                <FilterButton>
                    <FilterIcon />
                    <FilterButtonText>Filters</FilterButtonText>
                </FilterButton>
            </Header>

            {loading ? (
                <Loader /> 
            ) : (
                <CardContainer>
                <FlatList
                    data={prescriptions}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<Subtitle text="No prescriptions available" size={16} />}
                    />
                    </CardContainer>
            )}
        </Container>   
    );
}
