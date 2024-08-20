import { Prescriptions } from "@/screens/Prescriptions";
import { ScrollView, StyleSheet } from "react-native";


export default function Cards() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Prescriptions />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});