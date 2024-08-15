import styled from 'styled-components/native';

interface StyledTextInputProps {
    width: number;
    isFocused: boolean;
}

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
    border-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
    border-color: ${({ isFocused }) => (isFocused ? '#354DB0' : '#99A4D6')}; 
    border-radius: 10px;
    padding: 10px;
    font-size: 16px; 
    color: #99A4D6;
    height: 52px;
    width: ${({ width }) => width}px;
`;

export const IconWrapper = styled.View`
    position: absolute;
    right: 10px; 
    top: 50%;
    margin-top: -10px; 
    z-index: 1;
`;
