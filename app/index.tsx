import DateInput from "@/components/DateInput";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DateInput label='Date of birth' width={316}/>
  
    </View>
  );
}
