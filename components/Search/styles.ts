import React from 'react';
import styled from 'styled-components/native';
import { Searchbar as PaperSearchbar, SearchbarProps } from 'react-native-paper';
import { theme } from '@/global/styles/theme';


interface StyledSearchbarProps extends SearchbarProps {
  bgColor?: string;

}

const StyledSearchbar = styled(PaperSearchbar)<StyledSearchbarProps>`
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: ${props => props.bgColor || theme.colors.white};
  elevation: 0;
  font-family: Poppins-Regular;
`;

export default StyledSearchbar;
