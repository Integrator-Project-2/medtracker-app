import { ButtonText, Container, StyledButton, StyledIntegerInput } from "./styles";
import { useState } from "react";
import { LabelComponent } from "../Label";
import { theme } from "@/global/styles/theme";
import { View } from "react-native";

interface IntegerInputProps {
    label: string;
    width?: number;
    fontSize?: number;
    labelColor?: string;
    value: number;
    onChange: (value: number) => void;
}

export default function IntegerInput({ label, width, fontSize, labelColor, value, onChange }: IntegerInputProps) {
    const increment = () => onChange(value + 1);
    const decrement = () => onChange(value > 0 ? value - 1 : 0);

    const handleChange = (text: string) => {
    
        const newValue = parseInt(text, 10); 
        if (!isNaN(newValue)) {
            onChange(newValue); 
        }
    };
    

    return (
        <View>   
            <LabelComponent 
                text={label} 
                fontSize={fontSize}
                color={labelColor}    
            />
            <Container width={width}>
                <StyledButton mode="text" onPress={decrement}>
                    <ButtonText>-</ButtonText>
                </StyledButton>

                <StyledIntegerInput
                    mode="flat"
                    keyboardType="numeric"
                    value={value.toString()}
                    onChangeText={handleChange}
                    outlineColor={theme.colors.lightPurple}
                    textColor={theme.colors.darkBlue}
                    underlineColor="transparent"
                />

                <StyledButton mode="text" onPress={increment}>
                    <ButtonText>+</ButtonText>
                </StyledButton>
            </Container>
        </View>
    );
}
