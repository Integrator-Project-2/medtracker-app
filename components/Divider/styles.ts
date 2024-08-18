import styled from 'styled-components/native';
import { Divider as PaperDivider, Text as PaperText } from 'react-native-paper';
import { theme } from '@/global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled(PaperDivider)`
  flex: 1;
  height: 1px;
  background-color: ${ theme.colors.lightBlue};
`;

export const Text = styled(PaperText)`
  margin-horizontal: 8px;
  color: ${theme.colors.lightBlue};
  font-family: Poppins-Regular;
`;
