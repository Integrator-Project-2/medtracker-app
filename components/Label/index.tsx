import React from 'react';
import { Label } from './style';

interface LabelProps {
  text: string;
}

export const LabelComponent: React.FC<LabelProps> = ({ text }) => {
  return (
      <Label>{text}</Label>
  )
};
