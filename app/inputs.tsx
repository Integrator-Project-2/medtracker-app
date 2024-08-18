import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";
import { theme } from "@/global/styles/theme";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function Inputs() {
  return (
    <PaperProvider theme={theme}>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
      }}
    >
     
    
    <NameInput label='Name' placeholder='John Doe'/>
    

  
    </View>
    </PaperProvider>
  );
}
