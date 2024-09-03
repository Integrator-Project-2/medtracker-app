import { theme } from '@/global/styles/theme';
import * as React from 'react';
import StyledSearchbar from './styles';

interface SearchProps{
    onSearch: (query:string) => void;
}

export default function Search({ onSearch }:SearchProps) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const handleSearchChange = (query:string) =>
    {
        setSearchQuery(query);
        onSearch(query);
    }

        return (
            <StyledSearchbar
                placeholder="Search"
                placeholderTextColor={theme.colors.lightPurple}
                onChangeText={handleSearchChange}
                value={searchQuery}
                iconColor={theme.colors.navy}
                bgColor={theme.colors.lightPurpleWithOpacity}
            />
        );
};


