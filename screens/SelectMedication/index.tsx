import Title from "@/components/Title";
import { Container, FormButtonContainer, FormContainer, Header, SubtitleContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import { useEffect, useState } from "react";
import Subtitle from "@/components/Subtitle";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import { StyledScrollView } from "./styles";
import { Medication } from "@/types/Medication";
import { Alert, FlatList, View } from "react-native";
import { fetchMedications } from "@/services/medicationService";
import { getIconName } from "@/global/utils/iconUtils";
import Loader from "@/components/Loader";


export default function SelectMedicationScreen() {
    const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
    const router = useRouter();

    const [medications, setMedications] = useState<Medication[]>([]);
    const [loading, setLoading] = useState(true);
    const patientId = 1;

    const handlePress = (value: string) => {
        setSelectedMedication(value);
    };

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
        return (
            <View>
                <CardComponent
                    title={item.name}
                    subtitle={item.pharmaceutical_form}
                    iconName={getIconName(item.pharmaceutical_form)}
                    border
                    select
                    height={120}
                    width={312}
                    additionalInfoPrimaryfontSize={13}
                    value={item.name}
                    selected={selectedMedication === item.name}
                    onPress={() => handlePress(item.name)}
                />
            </View>
        )
    }

    return (
        <Container>
            <Header>
                <Title text="Create Reminder" color={theme.colors.darkBlue} size={24} />
            </Header>

            <SubtitleContainer>
                <Subtitle text='Select a medication' size={16} />
            </SubtitleContainer>

            <Search onSearch={handleSearch} />

            <FormContainer>
                {loading ? (
                    <Loader />
                ) : (
                    <FlatList
                        data={medications}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}

            </FormContainer>

            <FormButtonContainer row >
                <PrimaryButton
                    text='Cancel'
                    bgColor={theme.colors.lightNavy}
                    textColor={theme.colors.navy}
                    onPress={() => router.back()}
                    width={148}
                    height={52}
                />

                <PrimaryButton
                    text='Next'
                    bgColor={theme.colors.navy}
                    onPress={() => {
                        if (selectedMedication) {
                            router.push(`/createReminder?medication=${encodeURIComponent(selectedMedication)}`);
                        }
                    }}
                    width={148}
                    height={52}
                />
            </FormButtonContainer>
        </Container>
    )
}
