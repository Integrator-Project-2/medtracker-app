import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

interface StyledEmailInputProps {
    width?: number;
}

export const StyledEmailInput = styled(TextInput)<StyledEmailInputProps>`
    padding: 10px;
    font-size: 16px;
    height: 32px;
    background-color: transparent;
    width: ${(props) => props.width || 316}px;
    font-family: 'Poppins-Medium';
    color: #354DB0;
`;
