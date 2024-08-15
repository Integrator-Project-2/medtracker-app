import styled from 'styled-components/native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '@/global/styles/theme';

interface StyledButtonProps {
  width?: number;
  height?: number;
  borderColor?: string;
  borderRadius?: number;
  isFocused?: boolean;
}

const StyledButton = styled(PaperButton)<StyledButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '316px')};
  height: ${(props) => (props.height ? `${props.height}px` : '52px')};
  border-color: ${(props) => (props.borderColor ? props.borderColor : theme.colors.lightPurple)};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '10px')};
  border-width: ${({ isFocused }) => (isFocused ? '2px' : '1px')};
  border-color: ${({ isFocused }) => (isFocused ? theme.colors.navy : theme.colors.lightPurple)};
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export default StyledButton;
