import React from 'react';
import { StyledSubtitle } from './styles';

interface SubtitleProps {
  text: string;
  color?: string;
  size?: number;
  marginBottom?: number;
}

export default function Subtitle ({ text, color, size, marginBottom }:SubtitleProps) {
  return (
      <StyledSubtitle color={color} size={size} marginBottom={marginBottom}>{text}</StyledSubtitle>
  )
};
