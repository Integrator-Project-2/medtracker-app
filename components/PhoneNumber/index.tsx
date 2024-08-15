import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";


interface PhoneNumberInputProps {
    label: string;
    placeholder: string;
    width?: number;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ label, placeholder, width }) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');

    return (
      <View>
        <LabelComponent text={label} />
        <StyledTextInput
          mode="outlined"
          placeholder={placeholder}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={theme.colors.lightPurple} 
          outlineColor={theme.colors.lightPurple} 
          textColor={theme.colors.darkBlue}
          theme={theme}
          width={width}
          keyboardType="phone-pad" 
        />
      </View>
    );
};
