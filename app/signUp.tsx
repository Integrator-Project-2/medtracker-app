import AuthenticationScreen from "@/screens/Authentication/SignUpScreens";
import { ScrollView, StyleSheet } from "react-native";

export default function Authentication() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthenticationScreen />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});