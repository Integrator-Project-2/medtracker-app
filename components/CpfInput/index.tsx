import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface CpfInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: number;
  error?: string; 
}

const CpfInput: React.FC<CpfInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  width,
  error 
}) => {
  return (
    <View>
      <LabelComponent text={label} />
      <StyledTextInput
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.lightPurple}
        outlineColor={colors.lightPurple}
        textColor={colors.darkBlue}
        keyboardType="numeric"
        width={width}
        theme={theme}
      />
       {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default CpfInput;
