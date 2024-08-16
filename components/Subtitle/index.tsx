import React from 'react';
import { StyledSubtitle } from './styles';

interface SubtitleProps {
  text: string;
  color?: string;
  size?: number;
}

export default function Subtitle ({ text, color, size }:SubtitleProps) {
  return (
      <StyledSubtitle color={color} size={size}>{text}</StyledSubtitle>
  )
};
