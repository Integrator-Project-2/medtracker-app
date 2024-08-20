import { MedicationsScreen } from "@/screens/Medications";
import { ScrollView, StyleSheet } from "react-native";

export default function CreateReminder() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MedicationsScreen />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
  });