import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const StyledPrimaryButton = styled(TouchableOpacity)<{ 
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    border?: string;
 }>`
  background-color: ${({ bgColor }) => bgColor || '#354DB0'};
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) => (typeof height === 'string' ? height : `${height}px`)};
  flex-direction: row;
  border: ${({ border }) => border || 'none'};
`;

export const StyledTextButton = styled(Text)<{ color?: string }>`
  color: ${({ color }) => color || '#ffffff'};
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;