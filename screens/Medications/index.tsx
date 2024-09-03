import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View, Text } from "react-native";
import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import { Container, Header } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { fetchMedications } from "@/services/medicationService";
import { Medication } from "@/types/Medication";

export function MedicationsScreen() {
    const [medications, setMedications] = useState<Medication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMedications() {
            try {
                const data = await fetchMedications();
                setMedications(data);
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar as medicações.");
            } finally {
                setLoading(false);
            }
        }

        getMedications();
    }, []);

    const getIconName = (form: string) => {
        switch (form) {
            case 'tablet':
                return 'tablet';
            case 'capsule':
                return 'pill';
            case 'solution':
                return 'solution';
            case 'liquid':
                return 'liquid';
            case 'drops':
                return 'drops';
            case 'injectable':
                return 'injection';
        }
    };

    const renderItem = ({ item }: { item: Medication }) => {
        return (
            <View style={styles.card}>
                <CardComponent
                    title={item.name}
                    subtitle={item.pharmaceutical_form}
                    additionalInfoPrimary={item.amount ? "Amount" : undefined}
                    additionalInfoSecondary={item.amount || undefined}
                    iconName={getIconName(item.pharmaceutical_form)}
                    border={true}
                    additionalInfoSecondaryColor={theme.colors.lightBlue}
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

            <Search />

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

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
    },
});
