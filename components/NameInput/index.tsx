import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface NameInputProps {
    label: string;
    labelColor?: string;
    placeholder?: string;
    width?: number;
    value?: string;
    disabled?: boolean;
    border?: boolean;
    onChange?: (value: string) => void;
}

export const NameInput: React.FC<NameInputProps> = ({
  label,
  placeholder,
  labelColor,
  width,
  value,
  disabled,
  border,
  onChange
}) => {
  const [text, setText] = React.useState(value || '');

  const handleChange = (text: string) => {
      setText(text);
      if (onChange) {
          onChange(text);
      }
  };

  return (
    <View>
      <LabelComponent 
        text={label} 
        color={labelColor}
      />
      <StyledTextInput
        mode="outlined"
        placeholder={placeholder}
        value={text}
        onChangeText={handleChange}
        placeholderTextColor={colors.lightPurple} 
        outlineColor={colors.lightPurple} 
        textColor={colors.darkBlue}
        theme={theme}
        width={width}
      />
    </View>
  );
};