import { theme } from "@/global/styles/theme";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export const FilterButton = styled(TouchableOpacity)`
    background-color: transparent;
    border: 1px solid ${theme.colors.lightBlue};
    border-radius: 20px;
    width: 100px;
    height: 32px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    flex-direction: row;
`;

export const FilterButtonText = styled(Text)`
    font-size: 13px;
    font-family: 'Poppins-Medium';
    color: ${theme.colors.lightBlue};
`; 
