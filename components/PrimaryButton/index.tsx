import { GestureResponderEvent } from "react-native";
import { StyledPrimaryButton, StyledTextButton } from "./styles";
import { theme } from "@/global/styles/theme";

interface PrimaryButtonProps {
    text: string;
    icon?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
    width?: number | string;
    height?: number | string;
    border?: string;
    borderRadius?: number;
    fontSize?: number;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean; // Adiciona a propriedade disabled
}

export function PrimaryButton({ 
    text,
    icon,
    bgColor,
    textColor,
    width,
    height,
    border,
    borderRadius = 10,
    fontSize = 16,
    onPress,
    disabled = false, // Valor padrão
 }: PrimaryButtonProps) {
    return (
        <StyledPrimaryButton
            bgColor={disabled ? theme.colors.disabled : bgColor}
            width={width} 
            height={height} 
            border={border}
            onPress={disabled ? undefined : onPress} 
            borderRadius={borderRadius}
            disabled={disabled} 
        >
            {icon && icon}

            <StyledTextButton
                color={textColor} 
                fontSize={fontSize} 
            >
                    {text}
            </StyledTextButton>
        </StyledPrimaryButton>
    )
}
