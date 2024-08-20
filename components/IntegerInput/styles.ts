import { Button, TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import styled from "styled-components";
import { theme } from "@/global/styles/theme";

export const StyledButton = styled(Button)`
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled(Text)`
    font-size: 20px;
`;

interface ContainerProps {
    width?: number;
}

export const Container = styled(View) <ContainerProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-radius: 10px;
    height: 52px;
    border-color: ${theme.colors.lightBlue};
    width: ${(props) => props.width || 316}px; 
`;

export const StyledIntegerInput = styled(TextInput)`
    font-size: 16px;
    background-color: transparent;
    height: 32px;
    font-family: 'Poppins-Medium';
    color: #354DB0;
    width: 40px;
`;
