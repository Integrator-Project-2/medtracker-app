import { View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    align-content: center;
    padding: 40px;
    background-color: white;
`;

export const Header = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
`;

export const CardContainer = styled(View)`
    margin-bottom: 24px;
    align-items: center;
`;

export const CardButtonsContainer = styled(View)`
    margin-bottom: 16px;
    align-items: center;
    gap: 40px;
`;