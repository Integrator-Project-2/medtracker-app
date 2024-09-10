import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LabelComponent } from "../Label";
import { theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface PhoneNumberInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  width?: number;
  error?: string; 
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  width,
  error 
}) => {
  return (
    <View >
      <LabelComponent text={label} />
      <StyledTextInput
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={theme.colors.lightPurple}
        outlineColor={theme.colors.lightPurple}
        textColor={theme.colors.darkBlue}
        theme={theme}
        width={width}
        keyboardType="phone-pad"
      />
     {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};
