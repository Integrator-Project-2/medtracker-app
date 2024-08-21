import styled from "styled-components";
import { View } from "react-native";

export const Column = styled(View)`
    flex-direction: column;
    gap: 32px;
`;

export const ContentContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`