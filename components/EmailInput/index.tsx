import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface EmailInputProps {
    label: string;
    placeholder: string;
    width?: number;
}

export const EmailInput: React.FC<EmailInputProps> = ({ label, placeholder, width }) => {
    const [text, setText] = React.useState('');

    return (
      <View>
        <LabelComponent text={label} />
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
