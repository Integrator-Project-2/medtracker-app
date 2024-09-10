import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
interface StyledTextInputProps {
  width?: number;
}

export const StyledTextInput = styled(TextInput)<StyledTextInputProps>`
  padding: 10px;
  font-size: 16px;
  height: 32px;
  background-color: transparent;
  width: ${(props) => props.width || 316}px;
  font-family: 'Poppins-Medium';
  color: #354DB0;
`;

interface StyledTextInputMaskProps {
  width?: number;
  theme?: any;
}

export const StyledTextInputMask = styled(TextInputMask)<StyledTextInputMaskProps>`
  padding: 10px;
  font-size: 16px;
  height: 32px;
  background-color: transparent;
  width: ${(props) => props.width || 316}px;
  font-family: 'Poppins-Medium';
  color: #354DB0;
`;

