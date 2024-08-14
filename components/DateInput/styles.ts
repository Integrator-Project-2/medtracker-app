import styled from 'styled-components/native'

interface StyledTextInputProps {
    width: number;
}
export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
    border-width: 1px;
    border-radius: 10px;
    border-color: #99A4D6;
    padding: 10px;
    font-size: 16px; /* Tamanho da fonte */
    color: #99A4D6;
    width: ${props=> props.width}px
`
export const Label = styled.Text`
    font-size: 16px;
    color: black; 
    margin-bottom: 2px;
    font-family: 'Poppins-Medium'; 
`;

export const IconWrapper = styled.View`
    position: absolute;
    right: 10px; 
    top: 50%;
    marginTop: -10px; 
    zIndex: 1;
`;