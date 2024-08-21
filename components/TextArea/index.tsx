import React from "react";
import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface TextAreaProps {
    label: string;
    labelColor?: string;
    placeholder?: string;
    width?: number;
    value?: string;
    disabled?: boolean;
    border?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, labelColor, width, value }) => {
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
            multiline={true}
            numberOfLines={20}
            style={{ height: 100 }}
        />
      </View>
    );
};
