import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { Container, Header } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { fetchMedications } from "@/services/medicationService";
import { Medication } from "@/types/Medication";
import { getIconName } from "@/global/utils/iconUtils";


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
    }

    useEffect(() => {
        getMedications();
    }, []);

    const handleSearch = (query: string) => {
        getMedications(query)
    }

    const renderItem = ({ item }: { item: Medication }) => {

        const amountColor = item.low_stock ? theme.colors.red : theme.colors.lightBlue
        const displayAmount = item.amount !== null && item.amount !== undefined ? `${item.amount}` : undefined;

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
                    menuOptions={
                        [
                            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
                            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
                        ]
                    }
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
