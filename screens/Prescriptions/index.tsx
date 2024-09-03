import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { format } from 'date-fns';
import { FilterIcon } from "@/assets/images/svg/FilterIcon";
import CardComponent from "@/components/Card";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { FilterButton, FilterButtonText } from "./styles";
import { Container, Header } from "@/global/styles/globalStyles";
import { fetchPrescriptions, fetchDoctorDetails } from "@/services/prescriptionService";
import { Prescription } from "@/types/Prescription";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import base64 from 'base64-js';

const PATIENT_ID = 1;

export function Prescriptions() {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const [doctors, setDoctors] = useState<{ [key: number]: { name: string, specialty: string } }>({});

    const downloadPrescription = async (base64Pdf: string) => {
        console.log("Iniciando download do PDF...");
        //TODO: ajust download

    };

    useEffect(() => {
        const loadPrescriptions = async () => {
            try {
                const prescriptionData = await fetchPrescriptions(PATIENT_ID);
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
            }
        };

        loadPrescriptions();
    }, []);

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
        <View style={styles.card}>
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
                    downloadPrescription(item.prescription_file);
                }}
                width={316}
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
            <FlatList
                data={prescriptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </Container>   
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
    },
});