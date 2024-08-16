import React from 'react';
import { Label } from './style';

interface LabelProps {
  text: string;
  color?: string;
}

export const LabelComponent: React.FC<LabelProps> = ({ text, color }) => {
  return (
      <Label color={color}>{text}</Label>
  )
};
