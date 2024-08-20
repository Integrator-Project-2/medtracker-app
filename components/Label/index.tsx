import React from 'react';
import { Label } from './style';

interface LabelProps {
  text: string;
  color?: string;
  fontSize?: number;
}

export const LabelComponent: React.FC<LabelProps> = ({ text, color, fontSize }) => {
  return (
      <Label color={color} fontSize={fontSize}>{text}</Label>
  )
};
