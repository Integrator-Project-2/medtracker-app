import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import styled from "styled-components";

export const BottomSheetContainer = styled(View)`
    flex: 1;
    padding: 24px;
    justify-content: 'center';
    align-items: center;
    border-radius: 20px;
`; 

export const StyledText = styled(Text)`
    font-size: 16px;
    align-content: center;
`;

export const BottomSheetViewContainer = styled(BottomSheetView)`
    align-items: 'center';
    border-radius: 20px;
    flex: 1;
    padding: 12px 36px;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`; 

export const TextContainer = styled(View)`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`; 