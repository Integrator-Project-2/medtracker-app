import styled from "styled-components";
import { Text, View } from "react-native";
import { theme } from "@/global/styles/theme";

export const Container = styled(View)`
    flex-direction: column;
    align-items: start;
`

export const StyledText = styled(Text)`
    color: ${theme.colors.lightPurple};
    font-size: 16px;
    font-family: Poppins-Regular;
`
