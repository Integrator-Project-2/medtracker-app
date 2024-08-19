import { theme } from '@/global/styles/theme';
import * as React from 'react';
import StyledSearchbar from './styles';

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState('');

        return (
            <StyledSearchbar
                placeholder="Search"
                placeholderTextColor={theme.colors.lightPurple}
                onChangeText={setSearchQuery}
                value={searchQuery}
                iconColor={theme.colors.navy}
                bgColor={theme.colors.lightPurpleWitOpacity}
            />
        );
};


