
import SignInScreen from "@/screens/Authentication/SignInScreen";
import { ScrollView, StyleSheet } from "react-native";

export default function SignIn() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SignInScreen />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});