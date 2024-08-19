import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(TouchableOpacity)`
    background-color: transparent;
    border: 1px solid #4D80F9;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    min-width: 316px;
    padding: 12px 18px;
    border-radius: 10px;
`;

export const InputRadioText = styled(Text)`
    color: #4D80F9;
    font-size: 14px;
    font-family: Poppins-Semibold;
`;

export const RadioButton = styled.TouchableOpacity<{ selected: boolean }>`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    border-width: 2px;
    border-color: #354DB0;
    background-color: ${({ selected }) => (selected ? '#354DB0' : 'transparent')};
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;

export const InnerCircle = styled.View`
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: white;
`;