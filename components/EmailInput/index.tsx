import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface EmailInputProps {
    label: string;
    placeholder?: string;
    labelColor?: string;
    width?: number;
    value?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({ label, placeholder, width, value, labelColor }) => {
    const [text, setText] = React.useState(value || '');

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
          onChangeText={setText}
          placeholderTextColor={colors.lightPurple} 
          outlineColor={colors.lightPurple} 
          textColor={colors.darkBlue}
          theme={theme}
          width={width}
        />
      </View>
    );
};
