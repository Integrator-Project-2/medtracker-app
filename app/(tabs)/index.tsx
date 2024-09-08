import HomeScreen from "@/screens/Home";
import { ScrollView, StyleSheet } from "react-native";

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <HomeScreen/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});