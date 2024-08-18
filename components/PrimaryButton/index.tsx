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
    onPress,
 }: PrimaryButtonProps) {
    return (
        <StyledPrimaryButton
            bgColor={bgColor} 
            width={width} 
            height={height} 
            border={border}
            onPress={onPress}
        >
            {icon && icon}

            <StyledTextButton
                color={textColor} 
            >
                    {text}
            </StyledTextButton>
        </StyledPrimaryButton>
    )
}