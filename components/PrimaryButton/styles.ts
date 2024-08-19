import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const StyledPrimaryButton = styled(TouchableOpacity)<{ 
    bgColor?: string;
    width?: number | string;
    height?: number | string;
    border?: string;
    borderRadius?: number;
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
  border-radius: ${({ borderRadius }) => `${borderRadius}px` || 'none'};
`;

export const StyledTextButton = styled(Text)<{ color?: string; fontSize?: number}>`
  color: ${({ color }) => color || '#ffffff'};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: Poppins-Medium;
`;