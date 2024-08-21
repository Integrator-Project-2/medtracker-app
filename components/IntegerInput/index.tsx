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
}

export default function IntegerInput({ label, width, fontSize, labelColor }: IntegerInputProps) {
    const [value, setValue] = useState<number>(0);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value > 0 ? value - 1 : 0);

    const handleChange = (text: string) => {
        const newValue = text === '' ? 0 : parseInt(text, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
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
