import { GestureResponderEvent } from "react-native";
import { StyledPrimaryButton, StyledTextButton } from "./styles";

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
 }: PrimaryButtonProps) {
    return (
        <StyledPrimaryButton
            bgColor={bgColor} 
            width={width} 
            height={height} 
            border={border}
            onPress={onPress}
            borderRadius={borderRadius}
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