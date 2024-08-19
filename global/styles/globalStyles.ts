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

interface FormContainerProps {
    marginTop?: number;
}
export const FormContainer = styled(View)<FormContainerProps>`
    margin-bottom: 20px;
    gap: 28px;
    margin-top: ${(props) => props.marginTop || 20}px;
    align-items: center;
`;

interface FormButtonContainerProps {
    row?: boolean;
    marginTop?: number;
}

export const FormButtonContainer = styled(View)<FormButtonContainerProps>`
    margin-top: 100px;
    gap: 20px;
    margin-top: ${(props) => props.marginTop || 20}px;
    ${(props) => (
        props.row &&
        `flex-direction: row`
    )}
`

export const SubtitleContainer = styled(View)`
    margin-top: 40px;
`