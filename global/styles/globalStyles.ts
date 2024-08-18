import { View } from "react-native";
import styled from "styled-components";

export const Header = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
`;

export const Container = styled(View)`
    flex: 1;
    align-content: center;
    padding: 40px;
    background-color: white;
`;
