import { FlatList, FlatListProps, View } from "react-native";
import styled from "styled-components";
import { theme } from "./theme";

interface HeaderProps {
    column?: boolean;
    width?: string;
}
export const Header = styled(View) <HeaderProps>`
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
    justify-content: space-between;
    align-items: ${(props) => (props.column ? 'flex-start' : 'center')};
    margin: 24px 0;
    width: ${(props) => props.width || '100%'};
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
export const FormContainer = styled(View) <FormContainerProps>`
    margin-bottom: 20px;
    gap: 28px;
    margin-top: ${(props) => props.marginTop || 20}px;
    align-items: center;
`;

interface FormButtonContainerProps {
    row?: boolean;
    marginTop?: number;
}

export const FormButtonContainer = styled(View) <FormButtonContainerProps>`
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

export const ListContainer = styled(View)`
    width: 100%;
    align-items: center;
    gap: 30px;
    margin-top: 40px;
`;

interface ImageContainerProps {
    bgColor?: string;
    rounded?: boolean;
    fixedHeight?: boolean;
}
export const ImageContainer = styled(View) <ImageContainerProps>`
    background-color: ${(props) => props.bgColor || theme.colors.lightPurpleWithOpacity};
    align-items: center;
    justify-content: center;
    width: 100%;

    ${(props) => props.rounded && `
        border-radius: 10px;
    `}

    ${(props) =>
        props.fixedHeight
            ? `height: 230px;`
            : `flex: 1;`
    }
`;