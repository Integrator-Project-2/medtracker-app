import SelectMedicationScreen from "@/screens/SelectMedication";
import { ScrollView, StyleSheet } from "react-native";


export default function SelectMedication() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SelectMedicationScreen />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
  });