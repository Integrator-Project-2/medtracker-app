import React from 'react';
import { StyledTitle } from './styles';

interface TitleProps {
  text: string;
  color?: string;
  size?: number;
}

export default function Title ({ text, color, size }:TitleProps) {
  return (
      <StyledTitle color={color} size={size}>{text}</StyledTitle>
  )
};
