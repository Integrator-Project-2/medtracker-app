import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface AddressInputProps {
    label: string;
    placeholder?: string;
    width?: number;
    value?: string;
    onChange?: (value: string) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({ label, placeholder, width, value, onChange }) => {
  const [text, setText] = React.useState(value || '');

  const handleTextChange = (newText: string) => {
      setText(newText);
      if (onChange) {
          onChange(newText);
      }
  };

  return (
    <View>
      <LabelComponent text={label} />
      <StyledTextInput
        mode="outlined"
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange} // Usa a função handleTextChange
        placeholderTextColor={colors.lightPurple} 
        outlineColor={colors.lightPurple} 
        textColor={colors.darkBlue}
        theme={theme}
        width={width}
      />
    </View>
  );
};
