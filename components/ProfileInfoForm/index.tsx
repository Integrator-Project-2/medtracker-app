import { theme } from "@/global/styles/theme";
import { NameInput } from "../NameInput";
import { InputContainer } from "./styles";
import { SelectInput } from "../SelectInput";
import DateInput from "../DateInput";
import { EmailInput } from "../EmailInput";
import { View } from "react-native";
import Subtitle from "../Subtitle";
import IntegerInput from "../IntegerInput";
import { TextArea } from "../TextArea";

export function ProfileInfoForm() {
    return (
        <>  
            <NameInput 
                value="Pamela Halpert"
                label="Name"
                labelColor={theme.colors.lightPurple}
                disabled={true}
            />

            <InputContainer>
                <SelectInput
                    label="Gender"
                    labelColor={theme.colors.lightPurple}
                    options={['Female', 'Male', 'Non-Binary']}
                    width={130}
                />

                <DateInput
                    label="Date of Birth"
                    labelColor={theme.colors.lightPurple} 
                    width={126}
                    color={theme.colors.darkBlue}
                />
            </InputContainer>

            <EmailInput 
                label="Email"
                value="pamelahalpert@email.com"
                labelColor={theme.colors.lightPurple}
            />

            <NameInput 
                label="Address"
                value="Street 1, New avenue, City"
                labelColor={theme.colors.lightPurple}
            />

            <View style={{ alignItems: "flex-start", width: "100%" }} >
                <Subtitle 
                    text="Additional Information"
                    color={theme.colors.navy}
                    size={16}
                />
            </View>

            <InputContainer>
                <IntegerInput 
                    label="Height"
                    width={140}
                    labelColor={theme.colors.lightPurple} 
                />


                <IntegerInput 
                    label="Weight"
                    width={140}
                    labelColor={theme.colors.lightPurple} 
                />
            </InputContainer>

            <TextArea 
                label="Allergies and observations"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                labelColor={theme.colors.lightPurple}
            />    
        </>
    )
}