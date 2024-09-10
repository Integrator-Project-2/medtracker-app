import React from "react";
import { View, Text } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface EmailInputProps {
    label: string;
    placeholder?: string;
    labelColor?: string;
    width?: number;
    value?: string;
    onChange?: (value: string) => void;
    error?: string; 
}

export const EmailInput: React.FC<EmailInputProps> = ({
    label,
    placeholder,
    width,
    value,
    labelColor,
    onChange,
    error  
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
            <LabelComponent text={label} color={labelColor} />
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
                error={!!error}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    );
};
