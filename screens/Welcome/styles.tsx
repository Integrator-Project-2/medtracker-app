import { Detail } from "@/assets/images/svg/Detail";
import { theme } from "@/global/styles/theme";
import { Text, View } from "react-native";
import styled from "styled-components/native";


export const ContentContainer = styled(View)`
    flex: 1;
    background-color: '#FFFFFF';
    align-items: start;
    width: 100%;
    padding-left: 37px;
    padding-right: 37px;
    padding-top: 15px;
`;

export const StyledDetail = styled(Detail)`
    margin-bottom: 30px;
`;

export const AppDescription = styled(Text)`
    font-size: 14px;
    font-family: 'Poppins-Medium';
    color: ${theme.colors.lightPurple};
    text-align: justify;
    margin-bottom: 44px;
`;

export const ButtonContainer = styled(View)`
    gap: 31px;
`;