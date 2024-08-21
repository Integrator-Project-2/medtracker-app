import { theme } from "@/global/styles/theme";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export const InfoContainer = styled(View)`
    flex-direction: column;
`;

export const TextInfo = styled(Text)`
    color: ${theme.colors.darkBlue};
    font-family: 'Poppins-Medium';
    font-size: 16px;
`;

