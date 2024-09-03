import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { theme } from '@/global/styles/theme';
import { LoaderContainer } from './styles';

const Loader = () => {
    return (
        <LoaderContainer>
            <ActivityIndicator animating={true} color={theme.colors.primary} size="large" />
        </LoaderContainer>
       
    );
};


export default Loader;
