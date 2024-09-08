import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border-radius: 10px;
    border: 1.5px solid #354DB0;
    gap: 29px;
    min-width: 316px;
    height: 116px;
`;

export const ButtonContainer = styled(View)`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 28px 24px;
`;

export const TextButtonContainer = styled(View)`
    flex-direction: column;
    gap: 8px;
`;

export const TitleText = styled(Text)`
    font-size: 16px;
    color: #354DB0;
    font-family: Poppins-Semibold;
`;

export const DescriptionText = styled(Text)`
    font-size: 12px;
    color: #99A4D6;
    font-family: Poppins-Semibold;
`;

export const FontAwesomeIcon = styled(FontAwesome5)`
    font-size: 30px;
    transform: rotate(-26deg);
`;

export const FontistoIcon = styled(Fontisto)`
    transform: rotate(-26deg);
`;
export const MaterialCommunityIcon = styled(MaterialCommunityIcons)`
    transform: rotate(-26deg);
`;
