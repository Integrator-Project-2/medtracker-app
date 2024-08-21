import ReminderConfirmationScreen from "@/screens/ReminderConfirmation";
import { ScrollView, StyleSheet } from "react-native";

export default function ReminderConfirmation() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReminderConfirmationScreen />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});