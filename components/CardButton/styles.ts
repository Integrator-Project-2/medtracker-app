import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #354DB0;
    gap: 29px;
    min-width: 314px;
    min-height: 116px;
`;

export const ButtonContainer = styled(View)`
    width: 268px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 28px 24px;
`;

export const TextButtonContainer = styled(View)`
    flex-direction: column;
    gap: 12px;
`;

export const TitleText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: #354DB0;
`;

export const DescriptionText = styled(Text)`
    font-size: 10px;
    color: #99A4D6;
`;

export const FontAwesomeIcon = styled(FontAwesome5)`
    font-size: 30px;
    transform: rotate(-26deg);
`;

export const FontistoIcon = styled(Fontisto)`
    transform: rotate(-26deg);
`;