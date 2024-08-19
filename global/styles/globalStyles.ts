import { View } from "react-native";
import styled from "styled-components";

interface HeaderProps {
    column?: boolean;
}
export const Header = styled(View)<HeaderProps>`
    flex-direction: row;
    justify-content: space-between;
    margin: 24px 0;

      ${(props) => (
        props.column ?
        `flex-direction: column` : `flex-direction: row; align-items: center;`
    )}
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