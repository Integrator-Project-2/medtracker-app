import { theme } from '@/global/styles/theme';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import styled from 'styled-components';


export const StyledFloatingButton = styled(FAB)`
    background-color: ${theme.colors.lightBlue};
    border-radius: 50px;
`;

export const Container= styled(View)`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
`;