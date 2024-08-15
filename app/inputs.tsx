import CardComponent from "@/components/Card";
import CpfInput from "@/components/CpfInput";
import DateInput from "@/components/DateInput";
import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";
import { PhoneNumberInput } from "@/components/PhoneNumber";
import { SelectGenderInput } from "@/components/SelectGenderInput";
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
     
    <DateInput label='Date of birth' width={316} />
    <NameInput label='Name' placeholder='John Doe'/>
    <EmailInput label='Email' placeholder="johndoe@email.com"/>
    <PasswordInput label='Password' placeholder='********'/>
    <CpfInput label='Cpf' placeholder="000.000.000-"/>
    <PhoneNumberInput label='Phone Number' placeholder='(00) 0000-0000'/>
    <SelectGenderInput
    label="Select an option"
    options={['Female', 'Male', 'Non-Binary']}/> 
  
    </View>
    </PaperProvider>
  );
}
