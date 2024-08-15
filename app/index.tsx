import DateInput from "@/components/DateInput";
import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DateInput label='Date of birth' width={316} />
      <NameInput label='Name' placeholder='John Doe'/>
      <EmailInput label='Email' placeholder="johndoe@email.com"/>
  
    </View>
  );
}
