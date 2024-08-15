import React from "react";
import { View } from "react-native";
import { StyledNameInput } from "./style";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";

interface NameInputProps {
    label: string;
    placeholder: string;
    width?: number;
}

export const NameInput: React.FC<NameInputProps> = ({ label, placeholder, width }) => {
    const [text, setText] = React.useState('');

    return (
      <View>
        <LabelComponent text={label} />
        <StyledNameInput
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
